<template>
  <div class="app">
    <HeaderComponent @logout="logout" @login="login" :isLoggedIn="isLoggedIn" :style="{ backgroundColor: isLoggedIn ? '#7c02b6' : 'rgba(0, 0, 0, 0.4)' }"/>
    <div class="main-container" >
      <NavigationComponent :isLoggedIn="isLoggedIn" v-show="isLoggedIn"/>
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    isLoggedIn() {
      return this.$store.state.user.isLoggedIn;
    },
  },
  data() {
    return {
    };
  },
  methods: {
    changeView(view) {
      this.currentView = view;
    },
    logout() {
      this.$store.dispatch('logoutUser');
    },
    login() {
      this.$store.dispatch('loginUser');
    },
  },
};
</script>

<style>
.app {
  width: 100%;
  height: 100hv;
}

.main-container {
  display: flex;
  flex-direction: row;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--header-background);
  z-index: 1;
}

.login-message {
  font-size: 18px;
  margin-top: 20px;
  text-align: center;
  color: #888;
}
</style>