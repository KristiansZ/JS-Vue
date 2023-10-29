<template>
  <header class="header" :class="{ 'logged-in': isLoggedIn, 'logged-out': !isLoggedIn }">
    <div class="header-left">
      <img class="header-logo" src="@/assets/logo.svg" alt="Logo" />
      <div class="header-info">
        <p class="header-title">KRAKEN.FM</p>
      </div>
    </div>
    <div class="header-right">
      <div v-if="isLoggedIn" class="avatar"></div>
      <h1 v-if="isLoggedIn" class="header-text">{{ full_name }}</h1>
      <button class="header-button" @click="loginOrLogout" :style="{ backgroundColor: buttonBackgroundColor }">
        {{ loginOrLogoutButtonText }}
      </button>
    </div>
  </header>
</template>

<script>
import router from '@/router';
export default {
  name: 'HeaderComponent',
  computed: {
    isLoggedIn() {
      return this.$store.state.user.isLoggedIn;
    },
    full_name() {
      const user = this.$store.state.user;
      return `${user.firstName} ${user.lastName}`;
    },
    loginOrLogoutButtonText() {
      return this.isLoggedIn ? 'Logout' : 'Login';
    },
    buttonBackgroundColor() {
      return this.isLoggedIn ? '#000000' : '#7c02b6';
    },
  },
  methods: {
    loginOrLogout() {
      if (this.isLoggedIn) {
        if (confirm('Do you want to log out?')) {
          this.$store.dispatch('logoutUser');
          router.push('/');
        }
      } else {
        if (confirm('Do you want to log in?')) {
          this.$store.dispatch('loginUser');
          router.push('/home');
        }
      }
    },
  },
};
</script>

<style>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  padding: 10px;
  
  z-index: 1;
}

.header-left {
  display: flex;
  align-items: center;
}

.header-logo {
  width: 50px;
  height: 50px;
}

.header-info {
  margin-left: 10px;
}

.header-title {
  font-size: 30px;
  color: #ffffff;
}

.header-text {
  font-size: large;
  color: #ffffff;
  border-right: 1px solid #ffffff;
  padding-right: 10px;
  margin-right: 10px;
}

.header-right {
  display: flex;
  align-items: center;
}

.header-button {
  font-size: large;
  color: white;
  padding: 2px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 40px;
}

.avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #dd0e6e;
  font-size: 18px;
  margin-right: 10px;
}
</style>