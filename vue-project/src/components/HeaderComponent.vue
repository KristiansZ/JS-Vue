<template>
  <header class="header" :class="{ 'logged-in': isLoggedIn, 'logged-out': !isLoggedIn }">
    <div class="header-left">
      <img class="header-logo" src="src\assets\logo.svg" alt="Logo" />
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
export default {
  name: 'HeaderComponent',
  data() {
    return {
      isLoggedIn: false,
      user: {
        name: "Kristians",
        surname: "Zondaks",
        code: "IT21008",
      },
    };
  },
  computed: {
    full_name() {
      return `${this.user.name} ${this.user.surname}`;
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
        // Logout
        if (confirm('Do you want to log out?')) {
          this.isLoggedIn = false;
          this.$emit('logout', false);
        }
      } else {
        // Login
        if (confirm('Do you want to log in?')) {
          this.isLoggedIn = true;
          this.$emit('login', true);
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
  padding: 10px;
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