<template>
  <main class="draft">
    <h1 class="draftH">MIKE BASKETBALL TEAM FANTASY BASKETBALL DRAFT</h1>

    <div class="container">
        <table class="">
            <thead>
                <tr>
                    <th class="playerName">PLAYER NAME</th>
                    <th>GENDER</th>
                    <th>HEIGHT</th>
                    <th>POSITION</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="{ id, Gender, Height, Position } in players" :key="id">
                    <td class="playerName">{{ id }}</td>
                    <td>{{ Gender }}</td>
                    <td>{{ Height }}</td>
                    <td>{{ Position }}</td>
                    <button class="draft" @click="draftPlayer(id, user.email)">PICK</button>
                </tr>
            </tbody>
        </table>
        <br>
        <table class="">
            <thead>
                <tr>
                    <th class="playerName">PLAYER NAME</th>
                    <th>GENDER</th>
                    <th>HEIGHT</th>
                    <th>POSITION</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="{ id, Gender, Height, Position } in yourTeam" :key="id">
                    <td class="playerName">{{ id }}</td>
                    <td>{{ Gender }}</td>
                    <td>{{ Height }}</td>
                    <td>{{ Position }}</td>
                </tr>
            </tbody>
        </table>
        <a v-for="{ id, Team } in lastDrafted" :key="id">{{ id }} was drafted by {{ Team }}.</a>
    </div>
  </main>
</template>

<script>
import { auth, getUndraftedPlayers, getTeamPlayers, draftPlayer, getLastDraftedPlayer } from '../firebase'

export default {

    setup () {
        const user = auth.currentUser;
        const players = getUndraftedPlayers();
        const yourTeam = getTeamPlayers(user.email);

        const lastDrafted = getLastDraftedPlayer();

        return { user, players, yourTeam, lastDrafted, draftPlayer };
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
    margin: auto;
}

td, th {
    border: 1px solid rgb(107, 104, 104);
    padding: 0.5rem;
    text-align: left;
}

.playerName {
    width: 10rem;
}

.draft {
    padding: 0.5rem;
}
</style>