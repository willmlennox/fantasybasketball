import { createStore } from 'vuex'
import router from '../router'
import { auth, db } from '../firebase'
import { collection, addDoc } from "firebase/firestore"; 
import { createUserWithEmailAndPassword, 
        signInWithEmailAndPassword,
        signOut } from 'firebase/auth'

export default createStore({
  state: {
    user: null
  },
  mutations: {

    SET_USER (state, user) {
      state.user = user
    },

    CLEAR_USER (state) {
      state.user = null
    }

  },
  actions: {

    async login ({ commit }, details) {
      const { email, password } = details;

      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (error) {
        switch(error.code) {
          case 'auth/user-not-found':
            alert("User not found")
            break
          case 'auth/wrong-password':
            alert("Wrong password")
            break
          default:
            alert("Something went wrong")
        }

        return
      }

      commit('SET_USER', auth.currentUser)

      router.push('/')
    },

    async register ({ commit }, details) {
      const { email, password, teamName } = details;

      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (error) {
        switch(error.code) {
          case 'auth/email-already-in-use':
            alert("Email already in use")
            break
          case 'auth/invalid-email':
            alert("Invalid email")
            break
          case 'auth/operation-not-allowed':
            alert("Operation not allowed")
            break
          case 'auth/weak-password':
            alert("Weak password")
            break
          default:
            alert("Something went wrong")
        }

        return
      }

      commit('SET_USER', auth.currentUser)

      try {
        const docRef = await addDoc(collection(db, "Teams"), {
          TeamName: teamName,
          Players: [],
          Email: email,
        });

        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

      router.push('/')
    },

    async logout ({ commit }) {
      await signOut(auth)

      commit('CLEAR_USER')

      router.push('/login')
    },

    fetchUser ({ commit }) {
      auth.onAuthStateChanged(async user => {
        if (user === null) {
          commit('CLEAR_USER')
        } else {
          commit('SET_USER', user)

          if (router.isReady() && router.currentRoute.value.path === '/login'){
            router.push('/')
          }
        }
      })
    }

  },
})
