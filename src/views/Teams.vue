<template>
  <main class="home">
    <h1 class="title">MIKE'S BASKETBALL TEAM FANTASY BASKETBALL</h1>

    <div class="container">
      <div class="teams">
        <h1 class="title">GAME PERFORMANCES</h1>
        <div v-for="{ teamName, M, F, UTIL } in teams" :key="teamName">
          <h1 style="margin-bottom: 1rem">{{ teamName }}</h1>
          <table class="teamList">
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
              <tr v-if="M">
                <img :src="require(`../assets/${M.Photo}`)">
                <td class="playerName">{{ M.id }} <p :class="{ healthy: (M.STATUS == 'HEALTHY') }">{{ M.STATUS }}</p></td>
                <td>{{ M.GameStats.PTS }}</td>
                <td>{{ M.GameStats.AST }}</td>
                <td>{{ M.GameStats.REB }}</td>
                <td>{{ M.GameStats.BLK }}</td>
                <td>{{ M.GameStats.ST }}</td>
                <td>{{ M.GameStats.TO }}</td>
                <td>{{ M.GameStats.FPTS }}</td>
              </tr>
              <tr v-if="F">
                <img :src="require(`../assets/${F.Photo}`)">
                <td class="playerName">{{ F.id }} <p :class="{ healthy: (F.STATUS == 'HEALTHY') }">{{ F.STATUS }}</p></td>
                <td>{{ F.GameStats.PTS }}</td>
                <td>{{ F.GameStats.AST }}</td>
                <td>{{ F.GameStats.REB }}</td>
                <td>{{ F.GameStats.BLK }}</td>
                <td>{{ F.GameStats.ST }}</td>
                <td>{{ F.GameStats.TO }}</td>
                <td>{{ F.GameStats.FPTS }}</td>
              </tr>
              <tr v-if="UTIL">
                <img :src="require(`../assets/${UTIL.Photo}`)">
                <td class="playerName">{{ UTIL.id }} <p :class="{ healthy: (UTIL.STATUS == 'HEALTHY') }">{{ UTIL.STATUS }}</p></td>
                <td>{{ UTIL.GameStats.PTS }}</td>
                <td>{{ UTIL.GameStats.AST }}</td>
                <td>{{ UTIL.GameStats.REB }}</td>
                <td>{{ UTIL.GameStats.BLK }}</td>
                <td>{{ UTIL.GameStats.ST }}</td>
                <td>{{ UTIL.GameStats.TO }}</td>
                <td>{{ UTIL.GameStats.FPTS }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="standings">
        <h1 class="title">TEAM STANDINGS</h1>
        <table class="teamList">
            <thead>
                <tr>
                    <th class="empty"></th>
                    <th class="empty"></th>
                    <th>FPTS</th>
                    <th class="playerName">TEAM NAME</th>
                    <th>M</th>
                    <th>F</th>
                    <th>UTIL</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="{ TeamName, M, F, UTIL, Rank, TeamFPTS, Photo } in standings" :key="TeamName">
                  <img :src="require(`../assets/${Photo}`)">
                  <td>{{ Rank }}</td>
                  <td>{{ TeamFPTS }}</td>
                  <td class="playerName">{{ TeamName }}</td>
                  <td>{{ M }}</td>
                  <td>{{ F }}</td>
                  <td>{{ UTIL }}</td>
                </tr>
            </tbody>
        </table>
      </div>

    </div>
    <div class="reports">
      
    </div>
  </main>
</template>

<script>
import { auth, listStandings, listTeams } from '../firebase'

export default {

    setup () {
      const user = auth.currentUser;
      const teams = listTeams();
      const standings = listStandings();
      

      return { user, teams, standings };
    },

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

.teams {
    padding-right: 2rem;
    width: 50%;
    float: right;
}

.standings {
    padding-right: 2rem;
    width: 50%;
    float: left;
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
}

img {
    width: 3rem;
    height: 3rem;
}

.container {
    display: flex;
    font-size: 12px;
}
</style>