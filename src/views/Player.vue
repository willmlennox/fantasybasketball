<template>
  <main class="home">
    <h1 class="title">MIKE'S BASKETBALL TEAM FANTASY BASKETBALL</h1>
    <img class="playerPhoto" v-if="player" :src="require(`../assets/${player.Photo}`)">
    <h3 class="gameLogTitle">{{ player ? player.id : "" }} Game Log</h3>
    <div class="container">
        <table class="">
            <thead>
                <tr>
                    <th>DATE</th>
                    <th>SCORE</th>
                    <th>PTS</th>
                    <th>AST</th>
                    <th>REB</th>
                    <th>BLK</th>
                    <th>ST</th>
                    <th>TO</th>
                    <th>FPTS</th>
                </tr>
            </thead>
            <tbody v-if="player">
                  <tr v-for="game in player.GameLog" :key="game">
                    <td>{{ game.Date }}</td>
                    <td>{{ game.GameScore }}</td>
                    <td>{{ game.PTS }}</td>
                    <td>{{ game.AST }}</td>
                    <td>{{ game.REB }}</td>
                    <td>{{ game.BLK }}</td>
                    <td>{{ game.ST }}</td>
                    <td>{{ game.TO }}</td>
                    <td>{{ game.FPTS }}</td>
                  </tr>
              </tbody>
        </table> 
    </div>
  </main>
</template>

<script>
import { getPlayerLog } from '../firebase'

export default {
    data () {
        return { 
            playerID: this.$route.params.pid,
            player: null
            }
    },
    mounted() {
        this.getPlayer();
    },
    methods: {
        getPlayer () {
            this.player = getPlayerLog(this.playerID);
        }
    },
}
</script>

<style>

.title, .gameLogTitle {
  padding-bottom: 5rem;
}

.playerPhoto {
    width: 100px;
    height: 100px;
}

</style>