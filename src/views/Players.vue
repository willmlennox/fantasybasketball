<template>
  <main class="home">
    <h1 class="title">MIKE'S BASKETBALL TEAM FANTASY BASKETBALL</h1>

      <div class="players">
        <h1 class="title">PLAYER STATS</h1>
        <div class="column1">
            <table class="">
              <thead>
                  <tr>
                    <th class="empty"></th>
                    <th class="playerName">PLAYER NAME</th>
                    <th>PTS</th>
                    <th>AST</th>
                    <th>REB</th>
                    <th>BLK</th>
                    <th>ST</th>
                    <th>TO</th>
                    <th>FPTS</th>
                    <th class="empty"></th>
                    <th class="empty"></th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="player in players" :key="player">
                    <img :src="require(`../assets/${player.Photo}`)">
                    <td class="playerName"><router-link :to="{name: 'Player', params: {pid: player.id}}">{{ player.id }}</router-link> <p :class="{ healthy: (player.STATUS == 'HEALTHY') }">{{ player.STATUS }}</p></td>
                    <td>{{ player.TotalStats.PTS }}</td>
                    <td>{{ player.TotalStats.AST }}</td>
                    <td>{{ player.TotalStats.REB }}</td>
                    <td>{{ player.TotalStats.BLK }}</td>
                    <td>{{ player.TotalStats.ST }}</td>
                    <td>{{ player.TotalStats.TO }}</td>
                    <td>{{ player.TotalStats.FPTS }}</td>
                    <button class="draftBtn" v-if=" player.Team == '' " v-on:click="addPlayer(player.id, user.email)" >+</button>
                  </tr>
              </tbody>
          </table>    
        </div>
      </div>
  </main>
</template>

<script>
import { auth, getPlayers } from '../firebase'

export default {

    setup () { 

      const players = getPlayers();
      const user = auth.currentUser;

      return { players, user };
      
    },
    methods: {
      addPlayer(playerid, teamid) {
        this.$router.push({name: 'AddPlayer', params: {pid: playerid, tid: teamid}});
      }
    }

}
</script>

<style>

.title {
  padding-bottom: 5rem;
}

table {
    border-collapse: collapse;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 125%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 6rem;
}

td, th {
    border: 1px solid rgb(26, 159, 199);
    padding-right: 1rem;
    padding-left: 1rem;
    height: 2rem;
    text-align: left;
    margin: auto;
}

.empty {
    border: none;
    width: 5rem;
}

.home {
  background-image: linear-gradient(-180deg, #768c96 0%, #52585a 100%);
  box-sizing: border-box;
  color: #FFFFFF;
  display: block;
  font-size: 16px;
  padding: 1rem 1.75rem;
  width: 100%;
  border: 0;
}

.healthy {
  color: rgb(15, 202, 15);
}

p {
  color: red;
  font-size: 75%;
}

a {
  color: white;
  text-decoration: none;
}

a:hover {
  color: rgb(91, 1, 133);
}

img {
    width: 3rem;
    height: 3rem;
}

.players {
    font-size: 12px;
    margin: auto;
}

.draftBtn {
  background-image: linear-gradient(-180deg, #37AEE2 0%, #1E96C8 100%);
  border-radius: .5rem;
  box-sizing: border-box;
  color: #FFFFFF;
  display: flex;
  font-size: 16px;
  justify-content: center;
  padding: 1rem 1.75rem;
  text-decoration: none;
  width: 60%;
  border: 0;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.draftBtn:hover {
  background-image: linear-gradient(-180deg, #1D95C9 0%, #17759C 100%);
}

@media (min-width: 768px) {
  .draftBtn {
    padding: 1rem 2rem;
  }
}
</style>