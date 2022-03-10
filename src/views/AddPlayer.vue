<template>
  <main class="home">
    <h1 class="title">MIKE'S BASKETBALL TEAM FANTASY BASKETBALL</h1>
    <img class="playerPhoto" v-if="player" :src="require(`../assets/${player.Photo}`)">
    <h3 class="playerTitle">You Are Adding {{ player ? player.id : "" }}</h3>
    <div class="container">
        <table class="">
            <thead>
                <tr>
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
                <tr>
                <td>{{ player.TotalStats.PTS }}</td>
                <td>{{ player.TotalStats.AST }}</td>
                <td>{{ player.TotalStats.REB }}</td>
                <td>{{ player.TotalStats.BLK }}</td>
                <td>{{ player.TotalStats.ST }}</td>
                <td>{{ player.TotalStats.TO }}</td>
                <td>{{ player.TotalStats.FPTS }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <h3 class="playerTitle">Please Select The Player To Drop:</h3>
    <div class="container2">
        <h3 class="playerTitle">{{ team ? team.TeamName : "" }}</h3>
        <table class="teamList" v-if="team && player.Team == ''">
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
              <tr v-if="team.M">
                <img :src="require(`../assets/${team.M.Photo}`)">
                <td class="playerName">{{ team.M.id }} <p :class="{ healthy: (team.M.STATUS == 'HEALTHY') }">{{ team.M.STATUS }}</p></td>
                <td>{{ team.M.TotalStats.PTS }}</td>
                <td>{{ team.M.TotalStats.AST }}</td>
                <td>{{ team.M.TotalStats.REB }}</td>
                <td>{{ team.M.TotalStats.BLK }}</td>
                <td>{{ team.M.TotalStats.ST }}</td>
                <td>{{ team.M.TotalStats.TO }}</td>
                <td>{{ team.M.TotalStats.FPTS }}</td>
                <td>M</td>
                <button class="draftBtn" v-if=" player.Gender == 'M' " @click="addPlayerToTeam(player.id, team.M.id, team.id, 'M')">+</button>
              </tr>
              <tr v-if="team.F">
                <img :src="require(`../assets/${team.F.Photo}`)">
                <td class="playerName">{{ team.F.id }} <p :class="{ healthy: (team.F.STATUS == 'HEALTHY') }">{{ team.F.STATUS }}</p></td>
                <td>{{ team.F.TotalStats.PTS }}</td>
                <td>{{ team.F.TotalStats.AST }}</td>
                <td>{{ team.F.TotalStats.REB }}</td>
                <td>{{ team.F.TotalStats.BLK }}</td>
                <td>{{ team.F.TotalStats.ST }}</td>
                <td>{{ team.F.TotalStats.TO }}</td>
                <td>{{ team.F.TotalStats.FPTS }}</td>
                <td>F</td>
                <button class="draftBtn" v-if=" player.Gender == 'F' " @click="addPlayerToTeam(player.id, team.F.id, team.id, 'F')">+</button>
              </tr>
              <tr v-if="team.UTIL">
                <img :src="require(`../assets/${team.UTIL.Photo}`)">
                <td class="playerName">{{ team.UTIL.id }} <p :class="{ healthy: (team.UTIL.STATUS == 'HEALTHY') }">{{ team.UTIL.STATUS }}</p></td>
                <td>{{ team.UTIL.TotalStats.PTS }}</td>
                <td>{{ team.UTIL.TotalStats.AST }}</td>
                <td>{{ team.UTIL.TotalStats.REB }}</td>
                <td>{{ team.UTIL.TotalStats.BLK }}</td>
                <td>{{ team.UTIL.TotalStats.ST }}</td>
                <td>{{ team.UTIL.TotalStats.TO }}</td>
                <td>{{ team.UTIL.TotalStats.FPTS }}</td>
                <td>UTIL</td>
                <button class="draftBtn" @click="addPlayerToTeam(player.id, team.UTIL.id, team.id, 'UTIL')">+</button>
              </tr>
            </tbody>
        </table>
    </div>
  </main>
</template>

<script>
import { getPlayerLog, getTeamForAdd, getTeamPlayers, addPlayer } from '../firebase'

export default {
    data () {
        return { 
            playerID: this.$route.params.pid,
            teamID: this.$route.params.tid,
            players: null,
            team: null,
            player: null
            }
    },
    mounted() {
        this.getPlayer();
        this.getTeam();
    },
    methods: {
        getPlayer () {
            this.player = getPlayerLog(this.playerID);
        },
        getTeam () {
            this.team = getTeamForAdd(this.teamID);
        },
        getTeamList () {
            this.players = getTeamPlayers(this.teamID);
        },
        addPlayerToTeam (p1, p2, t, g) {
            addPlayer(p1, p2, t, g);
            this.$router.push({ name: "Teams" });
        }
    },
}
</script>

<style>

.title, .playerTitle {
  padding-bottom: 5rem;
}

.playerPhoto {
    width: 100px !important;
    height: 100px !important;
}

.healthy {
  color: rgb(15, 202, 15);
}

p {
  color: red;
  font-size: 75%;
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
  width: 100%;
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