<template>
  <div class="app">
    <HeaderComponent @logout="logout" @login="login" :isLoggedIn="isLoggedIn"/>
    <div class="main-container">
      <NavigationComponent @change-view="changeView" :isLoggedIn="isLoggedIn" />
      <div class="content">
        <HomeComponent v-if="currentView === 'home' && isLoggedIn" />
        <AboutMeComponent v-if="currentView === 'about' && isLoggedIn" />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import NavigationComponent from "@/components/NavigationComponent.vue";
import HomeComponent from "@/components/HomeComponent.vue";
import AboutMeComponent from "@/components/AboutMeComponent.vue";

export default {
  components: {
    HeaderComponent,
    NavigationComponent,
    HomeComponent,
    AboutMeComponent,
  },
  data() {
    return {
      currentView: "home",
      isLoggedIn: false,
    };
  },
  methods: {
    changeView(view) {
      this.currentView = view;
    },
    logout() {
      this.isLoggedIn = false;
    },
    login() {
      this.isLoggedIn = true;
    },
  },
};
</script>

<style>
body, html {
  margin: 0;
  padding: 0;
  background-color: #140d16;
}
.app {
  display: flex;
  flex-direction: column;
}

.main-container {
  display: flex;
  flex-direction: row;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  margin-top: 13px;
}

.header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--header-background);
}

.header.logged-in {
  --header-background: #7c02b6;
}

.header.logged-out {
  --header-background: #4d4d4d;
}

.login-message {
  font-size: 18px;
  margin-top: 20px;
  text-align: center;
  color: #888;
}
</style>