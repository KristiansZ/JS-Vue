<template>
  <div class="navigation">
    <router-link to="/home" class="nav-button" :class="{ active: currentView === 'home' }" v-if="isLoggedIn" @click="changeView('home')">
      HOME
    </router-link>
    <router-link to="/about-me" class="nav-button" :class="{ active: currentView === 'about-me' }" v-if="isLoggedIn" @click="changeView('about-me')">
      ABOUT ME
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    isLoggedIn: Boolean,
  },
  data() {
    return {
      currentView: this.$route.name || 'home',
    };
  },
  watch: {
    $route(to) {
      this.currentView = to.name || 'home';
    },
  },
  methods: {
    changeView(view) {
      this.currentView = view;
      this.$router.push({ name: view });
      this.$emit('change-view', view);
    },
  },
};
</script>

<style scoped>

.navigation {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #221f25;
  padding-right: 25px;
  padding-top: 69px;
  outline: rgb(112, 106, 106) solid 1px;
  height: 100vh;
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
  text-decoration: none;
}

.active {
  font-weight: bold;
  color: white;
  background-color: #7c02b6;
  clip-path: polygon(0 0, 100% 0, 93% 100%, 0 100%);
}
</style>