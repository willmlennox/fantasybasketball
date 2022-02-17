<template>
  <main class="draft">
    <h1 class="draftH">MIKE BASKETBALL TEAM FANTASY BASKETBALL DRAFT</h1>

    <div class="createDraft">
        <button class="draftBtn" v-if=" user.email == 'will@will.com' " @click="createDraftOrder()">CREATE DRAFT ORDER</button>
    </div>
    
    <div class="lastDraftedDiv">
        <a v-for="{ id, Team } in lastDrafted" :key="id">{{ id }} was drafted by {{ Team }}.</a>
    </div>

    <div class="container">
        <div class="column1">
            <h1>UNDRAFTED</h1>
            <table class="">
                <thead>
                    <tr>
                        <th class="empty"></th>
                        <th>ADP</th>
                        <th class="playerName">PLAYER NAME</th>
                        <th>GENDER</th>
                        <th>HEIGHT</th>
                        <th>POSITION</th>
                        <th class="empty"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="{ id, Gender, Height, Position, Photo, ADP } in players" :key="id">
                        <img :src="require(`../assets/${Photo}`)">
                        <td>{{ ADP }}</td>
                        <td class="playerName">{{ id }}</td>
                        <td>{{ Gender }}</td>
                        <td>{{ Height }}</td>
                        <td>{{ Position }}</td>
                        <div class="draftBtnDiv" v-for="team in currentTeam" :key="team">
                            <button class="draftBtn" v-if=" team.CurrentTeam == user.email " @click="draftPlayer(id, user.email)">DRAFT</button>
                        </div>
                    </tr>
                </tbody>
            </table>    
        </div>
        
        <div class="column2">
            <div v-for="{ teamName, M, F, UTIL } in teams" :key="teamName">
                <h1 style="margin-bottom: 1rem">{{ teamName }}</h1>
                <table class="teamList">
                    <thead>
                        <tr>
                            <th class="empty"></th>
                            <th class="playerName">PLAYER NAME</th>
                            <th>GENDER</th>
                            <th>HEIGHT</th>
                            <th>POSITION</th>
                            <th class="empty"></th>
                            <th class="empty"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-if="M">
                            <img :src="require(`../assets/${M.Photo}`)">
                            <td class="playerName">{{ M.id }}</td>
                            <td>{{ M.Gender }}</td>
                            <td>{{ M.Height }}</td>
                            <td>{{ M.Position }}</td>
                            <td>M</td>
                        </tr>
                        <tr v-if="F">
                            <img :src="require(`../assets/${F.Photo}`)">
                            <td class="playerName">{{ F.id }}</td>
                            <td>{{ F.Gender }}</td>
                            <td>{{ F.Height }}</td>
                            <td>{{ F.Position }}</td>
                            <td>F</td>
                        </tr>
                        <tr v-if="UTIL">
                            <img :src="require(`../assets/${UTIL.Photo}`)">
                            <td class="playerName">{{ UTIL.id }}</td>
                            <td>{{ UTIL.Gender }}</td>
                            <td>{{ UTIL.Height }}</td>
                            <td>{{ UTIL.Position }}</td>
                            <td>UTIL</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  </main>
</template>

<script>
import { auth, getUndraftedPlayers, draftPlayer, getLastDraftedPlayer, getCurrentDraftTeam, createDraftOrder, listTeams } from '../firebase'

export default {

    setup () {
        const user = auth.currentUser;
        const players = getUndraftedPlayers();
        const currentTeam = getCurrentDraftTeam();
        const lastDrafted = getLastDraftedPlayer();
        const teams = listTeams();

        return { user, players, teams, lastDrafted, currentTeam, draftPlayer, createDraftOrder };
    },

}
</script>

<style>
.draftH {
    padding-bottom: 5rem;
}

.container {
    display: flex;
}

table {
    border-collapse: collapse;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 125%;
    margin-left: auto;
    margin-right: auto;
}

td, th {
    border: 1px solid rgb(26, 159, 199);
    padding-right: 1rem;
    padding-left: 1rem;
    height: 5rem;
    text-align: left;
    margin: auto;
}

.playerName {
    width: 10rem;
}

.draft {
  background-image: linear-gradient(-180deg, #768c96 0%, #52585a 100%);
  box-sizing: border-box;
  color: #FFFFFF;
  display: block;
  font-size: 16px;
  padding: 1rem 1.75rem;
  width: 100%;
  border: 0;
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

.empty {
    border: none;
    width: 5rem;
}

.lastDraftedDiv {
    padding-bottom: 50px;
}

.column1 {
    padding-right: 2rem;
    width: 50%;
    float: right;
}

.column2 {
    padding-right: 2rem;
    width: 50%;
    float: left;
}

.teamList {
    margin-bottom: 5rem;
}

.createDraft {
    width: 10%;
    margin: auto;
}

img {
    width: 5rem;
    height: 5rem;
}
</style>