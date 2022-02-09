<template>
  <main class="admin">
    

    <div>

        <h1>Ryan's Cheeky Admin Page</h1>
            <form class="createGame" @submit.prevent="create">

                <h2>Which game is this?</h2>
                <input 
                v-model="gameNum"
                type="number" 
                placeholder="1" />
                <button class="btn" @click="createGame(gameNum,players)">Create Game BEFORE adding stats.</button>
                </form>
        <table class="table m-0">
            
            <tbody>
                <tr v-for="{id, points, rebounds, assists, steals,blocks,turnovers } in players" :key="id">
                    <td>{{ id }}</td>
                    <td> Points:{{ points }}</td>
                    <button class="btn" v-on:click="increment(id, points)">Increase Points</button>
                    <td>Rebounds{{ rebounds }}</td>
                    <button class="btn" v-on:click="increment(id, rebounds)">Increase Rebounds</button>
                    <td>Assists:{{ assists }}</td>
                    <button class="btn" v-on:click="increment(id, assists)">Increase Assists</button>
                    <td>Steals:{{ steals }}</td>
                    <button class="btn" v-on:click="increment(id, steals)">Increase Steaks</button>
                    <td>Blocks:{{ blocks }}</td>
                    <button class="btn" v-on:click="increment(id, blocks)">Increase Blocks</button>
                    <td>Turnovers:{{ turnovers }}</td>
                    <button class="btn" v-on:click="increment(id, turnovers)">Increase Turnovers</button>
                </tr>
            </tbody>
        </table>

    </div>
  </main>
</template>
<script>

import { auth, getPlayerNames, createGame} from '../firebase'
import { ref } from 'vue';

export default {
    setup () {
        const user = auth.currentUser;
        const players = getPlayerNames();
        const gameNum = ref({});

        return {
            players,
            user,
            gameNum,
            createGame
        };
    },
    
}
</script>
<style>
</style>