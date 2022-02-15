<template>
  <main class="login">
      <div>
          <h1 class="welcome_text">🏀 🏀 🏀  Mike Basketball Team Fantasy  🏀 🏀 🏀</h1>
          <img id="rotating_pic" src="../assets/home5.jpg" class="rotating_pic" alt="">

      <sections class="forms">
          <form class="register" @submit.prevent="register">

            <img id="rotating_pic" src="../assets/home3.jpg" class="rotating_pic" alt="">
            <h2>Register</h2>
            <input 
            type="email" 
            placeholder="Email Address"
            v-model="register_form.email" />
            
            <input 
                type="password" 
                placeholder="Password" 
                v-model="register_form.password" />
            <input 
                type="text" 
                placeholder="Team Name" 
                v-model="register_form.teamName" />
            <input 
                type="checkbox" 
                value="team"
                unchecked
                v-model="register_form.team" /> ARE YOU A TEAM? <br><br>
            <input 
                type="submit" 
                value="Register" />
            
            <img id="rotating_pic" src="../assets/home1.jpg" class="rotating_pic" alt="">
           

          </form>

          <form class="login" @submit.prevent="login">
              
               <img id="rotating_pic" src="../assets/home2.jpg" class="rotating_pic" alt="">
              <h2>Login</h2>
              <br>
                <br>
              <input 
                type="email" 
                placeholder="Email Address"
                v-model="login_form.email" />
                <input 
                    type="password" 
                    placeholder="Password" 
                    v-model="login_form.password" />
                    <br>
                    <br>
                <input 
                    type="submit" 
                    value="Login" />
                <img id="rotating_pic" src="../assets/home4.jpg" class="rotating_pic" alt="">
          </form>
        
      </sections>

      </div>

  </main>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
export default {

    setup () {
        const login_form = ref({});
        const register_form = ref({});
        const store = useStore();

        const login = async () => {
            store.dispatch('login', login_form.value);
        }

        const register = async () => {
            store.dispatch('register', register_form.value);
        }

        return {
            login_form,
            register_form,
            login,
            register
        }
    },

    methods: {

        play_intro_song() {
            var intro_song = new Audio("../assets/song.mp3");
            intro_song.volume = 0.5;
            //console.log("hi")
            //intro_song.play();
        }

    },

    created() {
        //window.addEventListener('scroll', this.play_intro_song);
    }
}
</script>

<style>
.forms {
	display: flex;
	min-height: 100vh;
}
form {
	flex: 1 1 0%;
	padding: 8rem 1rem 1rem;
}
form.register {
	color: #FFF;
	background-color: rgb(140, 18, 165);
	background-image: linear-gradient(
		to bottom right,
		rgb(140, 18, 165) 0%,
		rgb(73, 6, 87) 100%
	);
}
h2 {
	font-size: 2rem;
	text-transform: uppercase;
	margin-bottom: 2rem;
}
input:not([type="checkbox"]) {
	appearance: none;
	border: none;
	outline: none;
	background: none;
	display: block;
	width: 100%;
	max-width: 400px;
	margin: 0 auto;
	font-size: 1.5rem;
	margin-bottom: 2rem;
	padding: 0.5rem 0rem;
}
input:not([type="submit"]) {
	opacity: 0.8;
	transition: 0.4s;
}
input:focus:not([type="submit"]) {
	opacity: 1;
}
input::placeholder {
	color: inherit;
}
form.register input:not([type="submit"]) {
	color: #FFF;
	border-bottom: 2px solid #FFF;
}
form.login input:not([type="submit"]) {
	color: rgb(140, 18, 165);
	border-bottom: 2px solid rgb(140, 18, 165);
}
form.login input[type="submit"] {
	background-color: rgb(140, 18, 165);
	color: #FFF;
	font-weight: 700;
	padding: 1rem 2rem;
	border-radius: 0.5rem;
	cursor: pointer;
	text-transform: uppercase;
}
form.register input[type="submit"] {
	background-color: #FFF;
	color: rgb(140, 18, 165);
	font-weight: 700;
	padding: 1rem 2rem;
	border-radius: 0.5rem;
	cursor: pointer;
	text-transform: uppercase;
}
form.login h2 {
    color: rgb(140, 18, 165);
}
.rotating_pic {
    width: 400px;
    height: 200px;
}
</style>