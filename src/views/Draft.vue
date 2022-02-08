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
    </div>
  </main>
</template>

<script>
import { auth, getUndraftedPlayers, draftPlayer } from '../firebase'

export default {

    setup () {
        const user = auth.currentUser;
        const players = getUndraftedPlayers();
        return { user, players, draftPlayer };
    }

}
</script>

<style>

</style>