import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, onSnapshot, query, where, doc, updateDoc } from 'firebase/firestore';
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

// Firestore functions
const createTeam = async (teamName, email) => {
  try {
    const docRef = await addDoc(teamsCollection, {
      TeamName: teamName,
      Players: [],
      Email: email,
    });

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

};

const getPlayers = () => {
  const players = ref([]);
  const close = onSnapshot(playersCollection, snapshot => {
    players.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  });
  onUnmounted(close);
  return players;
};

const getTeam = (email) => {
  const doc = ref([]);
  const q = query(teamsCollection, where("Email", "==", email));
  const close = onSnapshot(q, snapshot => {
    doc.value = snapshot.docs.find(doc => ({ id: doc.id, ...doc.data() }))
  });
  onUnmounted(close);
  return doc.value;
};

const getTeamPlayers = (email) => {
  const players = ref([]);
  const team = getTeam(email);
  console.log(team)
  const q = query(playersCollection, where("Team", "==", team))
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

const draftPlayer = async (id, team) => {
  await updateDoc(doc(playersCollection, id), { Team: team })
}

export { auth, 
        createTeam,
        getPlayers,
        getUndraftedPlayers,
        draftPlayer,
        getTeamPlayers,
      }