<template>
  <main class="draft">
    <h1>Draft</h1>

    <div>
      <tbody>
          <tr v-for="{ id, Gender, Height, Position } in players" :key="id">
              <td>{{ id }}</td>
              <td>{{ Gender }}</td>
              <td>{{ Height }}</td>
              <td>{{ Position }}</td>
          </tr>
      </tbody>
    </div>
  </main>
</template>

<script>
import { getPlayers } from '../firebase'

export default {

    setup () {
        const players = getPlayers();
        return players;
    }

}
</script>

<style>

</style>