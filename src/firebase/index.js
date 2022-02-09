import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot,setDoc, query, where, doc, updateDoc, getDoc, orderBy, limit } from 'firebase/firestore';
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

// Firestore functions
const createTeam = async (teamName, email) => {

  const docRef = doc(teamsCollection, email);

  await setDoc(docRef, {
    TeamName: teamName,
    Players: [],
  });

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
  const close = onSnapshot(playersCollection, snapshot => {
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
  const q = query(playersCollection, where("Team", "==", ""))
  const close = onSnapshot(q, snapshot => {
    players.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  });
  onUnmounted(close);
  return players;
};

const draftPlayer = async (id, email) => {
  await updateDoc(doc(playersCollection, id), { Team: email })
  const docRef = doc(draftCollection, id);
  var currPos = doc(draftCollection, "DraftPosition");
  const cur = await getDoc(currPos);
  var num = cur.data().CurrentPos;
  num += 1;
  await updateDoc(doc(draftCollection, "DraftPosition"), { CurrentPos: num })

  getTeam(email).then(async response => {
    await setDoc(docRef, {
      Team: response,
      DraftPos: num,
    });
  });
  
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
      }