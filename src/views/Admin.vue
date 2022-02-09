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
                <tr v-for="{id, stats:{points, rebounds, assists, steals,blocks,turnovers} } in playerStats" :key="id">
                    <td>{{ id }}</td>
                    <td> Points:{{ points }}</td>
                    <button class="btn" v-on:click="updateStat(gameNum, id)"> Up</button>
                    <td>Rebounds{{ rebounds }}</td>
                    <button class="btn" v-on:click="updateStat(gameNum, {id, points})">Up</button>
                    <td>Assists:{{ assists }}</td>
                    <button class="btn" v-on:click="updateStat(gameNum, {id, points})">Up</button>
                    <td>Steals:{{ steals }}</td>
                    <button class="btn" v-on:click="updateStat(gameNum, {id, points})">Up</button>
                    <td>Blocks:{{ blocks }}</td>
                    <button class="btn" v-on:click="updateStat(gameNum, {id, points})">Up</button>
                    <td>Turnovers:{{ turnovers }}</td>
                    <button class="btn" v-on:click="updateStat(gameNum, {id, points})">Up</button>
                </tr>
            </tbody>
        </table>

    </div>
  </main>
</template>
<script>

import { auth, getPlayerNames, createGame, updateStat, getPlayerStats} from '../firebase'
import { ref } from 'vue';

export default {
    setup () {
        const user = auth.currentUser;
        const players = getPlayerNames();
        
        const gameNum = ref({});
        const playerStats = getPlayerStats(gameNum);

        return {
            players,
            user,
            gameNum,
            playerStats,
            createGame,
            updateStat
        };
    },
    
    
}
</script>
<style>
</style>