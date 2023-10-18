<template>
  <div class="navigation">
    <button class="nav-button" @click="changeView('home')" :class="{ active: currentView === 'home' }" v-if="isLoggedIn">
      HOME
    </button>
    <button class="nav-button" @click="changeView('about')" :class="{ active: currentView === 'about' }" v-if="isLoggedIn">
      ABOUT ME
    </button>
  </div>
</template>

<script>
export default {
  props: {
    isLoggedIn: Boolean,
  },
  data() {
    return {
      currentView: "home",
    };
  },
  methods: {
    changeView(view) {
      this.currentView = view;
      this.$emit("change-view", view);
    },
  },
};
</script>

<style scoped>
.navigation {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.nav-button {
  color: white;
  padding: 10px;
  padding-right: 200px;
  width: 300px;
  cursor: pointer;
  margin-left: 25px;
  margin-top: 25px;
  background-color: transparent;
  border: none;
  outline: none;
  text-align: left;
}

.active {
  font-weight: bold;
  color: white;
  background-color: #7c02b6;
  clip-path: polygon(0 0, 100% 0, 93% 100%, 0 100%);
}
</style>