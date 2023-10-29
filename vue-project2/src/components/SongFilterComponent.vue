<template>
    <div class="song-filter">
        <p class="sort-by-text">Sort by:</p>
        <div class="filter-buttons">
            <button @click="setFilter('none')" :class="{ active: currentFilter === 'none' }">None</button>
            <button @click="setFilter('song')" :class="{ active: currentFilter === 'song' }">Name</button>
            <button @click="setFilter('artist')" :class="{ active: currentFilter === 'artist' }">Artist</button>
        </div>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        currentFilter: 'none',
      };
    },
    methods: {
      setFilter(filter) {
        this.currentFilter = filter;
        this.$emit('filterChanged', filter);
      },
    },
  };
</script>
  
  <style scoped>
  .song-filter {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    font-weight: 1000;
  }
  .sort-by-text {
    margin-right: 10px;
    color: white;
  }
  
  .song-filter button {
    margin-right: 10px;
    padding: 4px;
    padding-left: 12px;
    padding-right: 12px;
    border: none;
    background-color: transparent;
    color: white;
    cursor: pointer;
    border-radius: 10px;
  }
  
  .song-filter button.active {
    background-color: #680606;
    color: #af1010;
  }
  </style>