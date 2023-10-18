import './assets/main.css'
import { createApp } from 'vue';
import App from './App.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import NavigationComponent from '@/components/NavigationComponent.vue';
import HomeComponent from '@/components/HomeComponent.vue';
import AboutMeComponent from '@/components/AboutMeComponent.vue';

const app = createApp(App);

app.component('HeaderComponent', HeaderComponent);
app.component('NavigationComponent', NavigationComponent);
app.component('HomeComponent', HomeComponent);
app.component('AboutMeComponent', AboutMeComponent);

app.mount('#app');