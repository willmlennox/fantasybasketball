import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot,setDoc, query, where, doc, updateDoc, getDoc, getDocs, orderBy, limit } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { ref, onUnmounted } from 'vue'

const firebaseConfig = {
  apiKey: "AIzaSyCTS21pRfiupsR85Lplykc4i9mm3a598tk",
  authDomain: "fantasybasketballwebsite.firebaseapp.com",
  projectId: "fantasybasketballwebsite",
  storageBucket: "fantasybasketballwebsite.appspot.com",
  messagingSenderId: "181536986312",
  appId: "1:181536986312:web:9d84c71877f2f185a781fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(app);

const playersCollection = collection(db, "Players");
const teamsCollection = collection(db, "Teams");
const gamesCollection = collection(db, "Games");
const draftCollection = collection(db, "Draft");

const maxNumTeams = 3;

// Firestore functions
const createTeam = async (teamName, email, team) => {
  if (team == true) {
    const teams = await getDocs(teamsCollection);
    if(teams.size < maxNumTeams) {
      const docRef = doc(teamsCollection, email);

      await setDoc(docRef, {
        TeamName: teamName,
        M: "",
        F: "",
        UTIL: "",
      });
    }
    else {
      alert("There is the maximum number of teams already.")
    }
  }
};

const createGame = async (gameNum, players) => {

  let text = gameNum.toString();
  const gamesRef = doc(gamesCollection, text);
  let stats = ref(players).value;

  await setDoc(gamesRef, {
    stats,
  });

    

}

const getPlayers = () => {
  const players = ref([]);
  const q = query(playersCollection, orderBy("TotalStats.FPTS", "desc"))
  const close = onSnapshot(q, snapshot => {
    players.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  });
  onUnmounted(close);
  return players;
};


const getPlayerStats = async (gameNum) => {
  //const players = ref([]);
  let text = gameNum.toString();
  console.log(text);
  const docRef = doc(gamesCollection, text);
  const players = await getDoc(docRef);

  if (players.exists()) {
    console.log("sdklasd");
    console.log("Document data:", players.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
  return players.data();
};

const getPlayerNames = () => {
  const players = ref([]);
  const close = onSnapshot(playersCollection, snapshot => {
    players.value = snapshot.docs.map(doc => ({ id:doc.id, stats: {points:0,rebounds:0, assists:0,steals:0, blocks:0, turnovers:0 }}))
  });
  onUnmounted(close);
  return players;
};

const getTeam = async (email) => {
  const docRef = doc(teamsCollection, email);
  const team = await getDoc(docRef);
  return team.data().TeamName;
};

const getAllTeams = () => {
  const teams = ref([]);
  const q = query(teamsCollection)
  const close = onSnapshot(q, snapshot => {
    teams.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  });
  onUnmounted(close);
  return teams;
}

const listTeams = () => {

  const teamList = ref([]);
  var playerList = [];
  var dList = [];
  var d = {};

  const close2 = onSnapshot(playersCollection, players => {
    players.forEach((doc) => {
      playerList.push(doc);
    });
  });

  const q = query(teamsCollection)
  const close = onSnapshot(q, teams => {
    dList = [];
    teams.forEach(value => {

      d = {
        "teamName": null,
        "M": null,
        "F": null,
        "UTIL": null,
      };
      
      d["teamName"] = value.data().TeamName;
  
      playerList.forEach((doc) => {
        if (doc.id == value.data().M) {
          d["M"] = doc.data();
          d["M"]["id"] = doc.id;
        } else if (doc.id == value.data().F) {
          d["F"] = doc.data();
          d["F"]["id"] = doc.id;
        } else if (doc.id == value.data().UTIL) {
          d["UTIL"] = doc.data();
          d["UTIL"]["id"] = doc.id;
        }
      });
      dList.push(d);
    });
    teamList.value = dList;
  });

  onUnmounted(close);
  onUnmounted(close2);

  return teamList;
}

const getTeamPlayers = (email) => {
  const players = ref([]);
  const q = query(playersCollection, where("Team", "==", email))
  const close = onSnapshot(q, snapshot => {
    players.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  });
  onUnmounted(close);
  return players;
};

const getUndraftedPlayers = () => {
  const players = ref([]);
  const q = query(playersCollection, where("Team", "==", ""), orderBy("ADP"))
  const close = onSnapshot(q, snapshot => {
    players.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  });
  onUnmounted(close);
  return players;
};

const getCurrentDraftTeam = () => {
  const team = ref([]);
  const q = query(draftCollection, where("CurrentPos", ">=", 0))
  const close = onSnapshot(q, snapshot => {
    team.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  });
  onUnmounted(close);
  return team;
}

const draftPlayer = async (id, email) => {

  // Update team's player list
  const teamRef = doc(teamsCollection, email);
  const team = await getDoc(teamRef);

  const playerRef = doc(playersCollection, id);
  const player = await getDoc(playerRef);

  const m = team.data().M;
  const f = team.data().F;
  const util = team.data().UTIL;
  const g = player.data().Gender;

  if(g == "M") {
    if(m == ""){
      await updateDoc(doc(teamsCollection, email), { M: id });
    } else if (util == "") {
      await updateDoc(doc(teamsCollection, email), { UTIL: id });
    } else {
      return alert("Cannot draft " + id + ". Male and util spots are full on your team.");
    }
  } else {
    if(f == ""){
      await updateDoc(doc(teamsCollection, email), { F: id });
    } else if (util == "") {
      await updateDoc(doc(teamsCollection, email), { UTIL: id });
    } else {
      return alert("Cannot draft " + id + ". Female and util spots are full on your team.");
    }
  }
  
  

  await updateDoc(doc(playersCollection, id), { Team: email })

  // Update draft collection pointer
  var currPos = doc(draftCollection, "DraftPosition");
  const cur = await getDoc(currPos);
  var num = cur.data().CurrentPos;

  // Update draft collection player
  const docRef = doc(draftCollection, id);
  getTeam(email).then(async response => {
    await setDoc(docRef, {
      Team: response,
      DraftPos: num,
    });

    num += 1;
    await updateDoc(doc(draftCollection, "DraftPosition"), { CurrentPos: num })

    // Update current team drafting
    var orderRef = doc(draftCollection, "DraftOrder");
    const order = await getDoc(orderRef);
    const curTeam = order.data()[num];
    await updateDoc(doc(draftCollection, "DraftPosition"), { CurrentTeam: curTeam })

  });
}

const createDraftOrder = async () => {
  var c = 0;
  var order = 1;
  var desc = false;
  var maxTeamSize = 3;
  var teams = [];

  console.log(order);

  const teamDocs = await getDocs(teamsCollection);
  teamDocs.forEach((doc) => {
    teams.push(doc.id)
  })

  // shuffle array
  for (let i = teams.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [teams[i], teams[j]] = [teams[j], teams[i]];
  }

  // snake order
  for (let i = 0; i < maxTeamSize; i++) {
    teamDocs.forEach(() => {
      updateDoc(doc(draftCollection, "DraftOrder"), { [order]: teams[c] })
      if (!desc) {
        c++;
      } else {
        c--;
      } if (c==-1 && desc) {
        desc = false;
        c++;
      } else if (c==teams.length && !desc) {
        desc = true;
        c--;
      }
      order++;
    })
  }
  updateDoc(doc(draftCollection, "DraftOrder"), { [order]: "" })

  // Get current draft number
  var currPos = doc(draftCollection, "DraftPosition");
  const cur = await getDoc(currPos);
  var num = cur.data().CurrentPos;

  // Update current team drafting
  var orderRef = doc(draftCollection, "DraftOrder");
  const draftOrder = await getDoc(orderRef);
  const curTeam = draftOrder.data()[num];
  await updateDoc(doc(draftCollection, "DraftPosition"), { CurrentTeam: curTeam })

}

const getLastDraftedPlayer = () => {
  const players = ref([]);
  const q = query(draftCollection, orderBy("DraftPos", "desc"), limit(1));
  const close = onSnapshot(q, snapshot => {
    players.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  });
  onUnmounted(close);
  return players;
}

const updateStat = async (gameNum, players) => {
  let stats = ref(players).value;

  await updateDoc(doc(gamesCollection, gameNum),{
    stats,
  });
}

const resetGameStats = async (date, gameScore) => {

  var gameLog = [];
  var teams = {};
  var teamRef = ({});
  const playerDocs = await getDocs(playersCollection);
  playerDocs.forEach(async player => {
    if(player.data().Team != "") {
      if(!teams[player.data().Team]) {
        teams[player.data().Team] = player.data().GameStats.FPTS;
      } else {
        teams[player.data().Team] += player.data().GameStats.FPTS;
      }
    }
    gameLog = [];

    if(player.data().GameLog) {
      gameLog = player.data().GameLog;
    }

    gameLog.push(
      {
        Date: date,
        GameScore: gameScore,
        PTS: player.data().GameStats.PTS,
        AST: player.data().GameStats.AST,
        REB: player.data().GameStats.REB,
        BLK: player.data().GameStats.BLK,
        ST: player.data().GameStats.ST,
        TO: player.data().GameStats.TO,
        FPTS: player.data().GameStats.FPTS,
      }
    )
    
    await updateDoc(doc(playersCollection, player.id), { 
      TotalStats: {
        PTS: player.data().TotalStats.PTS + player.data().GameStats.PTS,
        AST: player.data().TotalStats.AST + player.data().GameStats.AST,
        REB: player.data().TotalStats.REB + player.data().GameStats.REB,
        BLK: player.data().TotalStats.BLK + player.data().GameStats.BLK,
        ST: player.data().TotalStats.ST + player.data().GameStats.ST,
        TO: player.data().TotalStats.TO + player.data().GameStats.TO,
        FPTS: player.data().TotalStats.FPTS + player.data().GameStats.FPTS,
      },
      GameLog: gameLog,
      GameStats: {
        PTS: 0,
        AST: 0,
        REB: 0,
        BLK: 0,
        ST: 0,
        TO: 0,
        FPTS: 0,
      }
    })
  });

  const q = query(teamsCollection, orderBy("TeamFPTS", "desc"));
  const teamDocs = await getDocs(q);
  var c = 1;
  teamDocs.forEach(doc => {
    teams[doc.id + "R"] = c;
    c++;
  })

  for (var key in teams) {
    teamRef = doc(teamsCollection, key);
    const team = await getDoc(teamRef);
    await updateDoc(doc(teamsCollection, key), {
      TeamFPTS: team.data().TeamFPTS + teams[key],
      Rank: teams[key + "R"],
    })
  }
}

const listStandings = () => {
  const teams = ref([]);
  const q = query(teamsCollection, orderBy("TeamFPTS", "desc"));
  const close = onSnapshot(q, snapshot => {
    teams.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  });
  onUnmounted(close);
  return teams;
}

const getPlayerLog = (pid) => {
  const player = ref([]);
  const close = onSnapshot(doc(playersCollection, pid), snapshot => {
    player.value = snapshot.data()
    player.value["id"] = snapshot.id
  });
  onUnmounted(close)
  return player;
}

const getTeamForAdd = (tid) => {
  const team = ref([]);
  var playerList = [];
  var d = {};

  const close2 = onSnapshot(playersCollection, players => {
    players.forEach((doc) => {
      playerList.push(doc);
    });
  });

  const close = onSnapshot(doc(teamsCollection, tid), snapshot => {

    d = {
      "teamName": null,
      "id": tid,
      "M": null,
      "F": null,
      "UTIL": null,
    };
    
    d["teamName"] = snapshot.data().TeamName;

    playerList.forEach((doc) => {
      if (doc.id == snapshot.data().M) {
        d["M"] = doc.data();
        d["M"]["id"] = doc.id;
      } else if (doc.id == snapshot.data().F) {
        d["F"] = doc.data();
        d["F"]["id"] = doc.id;
      } else if (doc.id == snapshot.data().UTIL) {
        d["UTIL"] = doc.data();
        d["UTIL"]["id"] = doc.id;
      }
    });
    team.value = d;
  });

  onUnmounted(close);
  onUnmounted(close2);

  return team;
}

const addPlayer = async (p1, p2, t, g) => {
  await updateDoc(doc(playersCollection, p1), {
    Team: t
  })
  await updateDoc(doc(playersCollection, p2), {
    Team: ""
  })
  await updateDoc(doc(teamsCollection, t), {
    [g]: p1
  })
}

export { auth, 
        createTeam,
        createGame,
        getPlayers,
        getPlayerStats,
        getPlayerNames,
        getUndraftedPlayers,
        draftPlayer,
        getTeamPlayers,
        getTeam,
        updateStat,
        getLastDraftedPlayer,
        getAllTeams,
        getCurrentDraftTeam,
        createDraftOrder,
        listTeams,
        resetGameStats,
        listStandings,
        getPlayerLog,
        getTeamForAdd,
        addPlayer,
      }