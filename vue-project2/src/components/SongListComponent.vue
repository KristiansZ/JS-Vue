<template>
    <div class="song-list">
      <SongFilterComponent @filterChanged="updateFilter" />
      <table class="song-table">
        <thead>
        <tr>
          <th class="header-cell" @click="updateFilter('song')">Name</th>
          <th class="header-cell" @click="updateFilter('artist')">Artist</th>
        </tr>
      </thead>
        <tbody>
          <tr v-for="song in sortedSongs" :key="song.song">
            <td style="">{{ song.song }}</td>
            <td>{{ song.artist }}</td>
          </tr>
        </tbody>
      </table>
    </div>
</template>
  
<script>
  import store from "@/store";
  
  export default {
    data() {
      return {
        sortedSongs: store.state.all_songs.slice(),
        sortKey: null,
      };
    },
    methods: {
        updateFilter(key) {
            if (key === 'none') {
                this.sortKey = null;
                this.sortedSongs = store.state.all_songs.slice();
            } else if (this.sortKey === key) { //also provides reverse search posssiblity, if clicked on the same button twice
                this.sortedSongs.reverse();
            } else {
                this.sortKey = key;
                this.sortedSongs.sort((a, b) => a[key].localeCompare(b[key]));
            }
        },
    },
  };
</script>
  
<style scoped>
.song-list {
    margin-top: 20px;
}

.song-table {
    width: 100%;
    border-collapse: collapse;
}

.header-cell {
  position: relative;
  width: 50%;
}

.header-cell::after {
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #4b4747;
}

.song-table th, .song-table td {
  padding: 6px;
  text-align: left;
}

</style>