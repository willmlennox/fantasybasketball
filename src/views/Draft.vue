<template>
  <main class="draft">
    <h1>Draft</h1>

    <div>
        <table class="table m-0">
            <tbody>
                <tr v-for="{ id, Gender, Height, Position } in players" :key="id">
                    <td>{{ id }}</td>
                    <td>{{ Gender }}</td>
                    <td>{{ Height }}</td>
                    <td>{{ Position }}</td>
                    <button class="btn" @click="draftPlayer(id, user.email)">PICK</button>
                </tr>
            </tbody>
        </table>
        <br>
        <table class="table m-0">
            <tbody>
                <tr v-for="{ id, Gender, Height, Position } in yourTeam" :key="id">
                    <td>{{ id }}</td>
                    <td>{{ Gender }}</td>
                    <td>{{ Height }}</td>
                    <td>{{ Position }}</td>
                </tr>
            </tbody>
        </table>
    </div>
  </main>
</template>

<script>
import { auth, getUndraftedPlayers, getTeamPlayers, getTeam, draftPlayer } from '../firebase'

export default {

    setup () {
        const user = auth.currentUser;
        const players = getUndraftedPlayers();
        const teamName = getTeam(user.email);
        const yourTeam = getTeamPlayers(teamName);
        return { user, players, yourTeam, draftPlayer };
    }

}
</script>

<style>

</style>