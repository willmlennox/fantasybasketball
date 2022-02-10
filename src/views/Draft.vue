<template>
  <main class="draft">
    <h1 class="draftH">MIKE BASKETBALL TEAM FANTASY BASKETBALL DRAFT</h1>

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
                        <th class="playerName">PLAYER NAME</th>
                        <th>GENDER</th>
                        <th>HEIGHT</th>
                        <th>POSITION</th>
                        <th class="empty"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="{ id, Gender, Height, Position, Photo } in players" :key="id">
                        <img :src="require(`../assets/${Photo}`)">
                        <td class="playerName">{{ id }}</td>
                        <td>{{ Gender }}</td>
                        <td>{{ Height }}</td>
                        <td>{{ Position }}</td>
                        <button class="draftBtn" @click="draftPlayer(id, user.email)">DRAFT</button>
                    </tr>
                </tbody>
            </table>    
        </div>
        
        <div class="column2">
            <h1>YOUR TEAM</h1>
            <table class="">
                <thead>
                    <tr>
                        <th class="empty"></th>
                        <th class="playerName">PLAYER NAME</th>
                        <th>GENDER</th>
                        <th>HEIGHT</th>
                        <th>POSITION</th>
                        <th class="empty"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="{ id, Gender, Height, Position, Photo } in yourTeam" :key="id">
                        <img :src="require(`../assets/${Photo}`)">
                        <td class="playerName">{{ id }}</td>
                        <td>{{ Gender }}</td>
                        <td>{{ Height }}</td>
                        <td>{{ Position }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  </main>
</template>

<script>
import { auth, getUndraftedPlayers, getTeamPlayers, draftPlayer, getLastDraftedPlayer, getAllTeams } from '../firebase'

export default {

    setup () {
        const user = auth.currentUser;
        const players = getUndraftedPlayers();
        const teams = getAllTeams();
        const yourTeam = getTeamPlayers(user.email);

        const lastDrafted = getLastDraftedPlayer();

        return { user, players, yourTeam, teams, lastDrafted, draftPlayer };
    }

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
}

.playerName {
    width: 10rem;
}

.draft {
  background-image: linear-gradient(-180deg, #768c96 0%, #52585a 100%);
  border-radius: .5rem;
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

.column1 {
    padding-right: 2rem;
    width: 50%;
    float: left;
}

img {
    width: 5rem;
    height: 5rem;
}
</style>