import { createRouter, createWebHistory } from 'vue-router';
import AboutMeView from './AboutMeView.vue'
import LandingView from './LandingView.vue'
import HomeView from './HomeView.vue'
import store from './store';

const routes = [
  { path: '/', component: LandingView, name: '/', },
  {
    path: '/home',
    component: HomeView,
    name: 'home',
    beforeEnter: (to, from, next) => {
      if (store.state.user.isLoggedIn) {
        next();
      } else {
        next('/');
      }
    },
  },
  {
    path: '/about-me',
    component: AboutMeView,
    name: 'about-me',
    beforeEnter: (to, from, next) => {
      if (store.state.user.isLoggedIn) {
        next();
      } else {
        next('/');
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;