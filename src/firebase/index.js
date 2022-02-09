import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot,setDoc, query, where, doc, updateDoc, getDoc } from 'firebase/firestore';
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

// Firestore functions
const createTeam = async (teamName, email) => {

  const docRef = doc(teamsCollection, email);

  await setDoc(docRef, {
    TeamName: teamName,
    Players: [],
    id: email,
  });

};

const createGame = async (gameNum) => {
  let text = gameNum.toString();
  const gamesRef = doc(gamesCollection, text)

  await setDoc(gamesRef, {
    
    Game: gameNum,
    test: "fdjsk",
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

const getBasePlayerStats = () => {
  const players = ref([]);
  const close = onSnapshot(playersCollection, snapshot => {
    players.value = snapshot.docs.map(doc => ({ id: doc.id, points:0,rebounds:0, assists:0,steals:0, blocks:0, turnovers:0 }))
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
}

export { auth, 
        createTeam,
        createGame,
        getPlayers,
        getBasePlayerStats,
        getUndraftedPlayers,
        draftPlayer,
        getTeamPlayers,
        getTeam,
      }