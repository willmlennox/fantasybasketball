<template>
  <div id="nav" v-if="$store.state.user">
    <router-link class="navLink" to="/">TEAMS</router-link> 
    <router-link class="navLink" to="/about">PLAYERS</router-link> 
    <router-link class="navLink" to="/draft">DRAFT</router-link>
    <button class="logoutBtn" @click="$store.dispatch('logout')">LOGOUT</button>
  </div>
  <router-view/>
</template>

<script>
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

    onBeforeMount(() => {
      store.dispatch('fetchUser')
    })
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  background-image: linear-gradient(-180deg, #61696b 0%, #768c96  100%);
  width: 100%;
  height: 4rem;
}

#nav a {
  font-weight: bold;
  font-size: 26px;
  color: #2c3e50;
  margin: 10rem;
}

#nav a.router-link-exact-active {
  color: #1D95C9;
}

#nav button.logoutBtn {
  background-image: linear-gradient(-180deg, #ee4c46 0%, #e92323 100%);
  border-radius: .5rem;
  box-sizing: border-box;
  color: #FFFFFF;
  display: inline-flex;
  font-size: 16px;
  justify-content: center;
  padding: 1rem 1.75rem;
  text-decoration: none;
  border: 0;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  float: right;
  margin: 0.40rem;
}

#nav button.logoutBtn {
  background-image: linear-gradient(-180deg, #000000 0%, #221f1f 100%);
}

@media (min-width: 768px) {
  #nav button.logoutBtn {
    padding: 1rem 2rem;
  }
}

</style>
