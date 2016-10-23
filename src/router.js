import Vue from 'vue';
import App from './components/App.vue';
import Home from './components/home/Home.vue';
import About from './components/about/About.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import { HOME_ROUTES } from './components/home/home-routes';
import { ABOUT_ROUTES } from './components/about/about-routes';

Vue.use(VueResource);
Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    HOME_ROUTES,
    ABOUT_ROUTES
  ]
});

const app = new Vue({
  router,
  ...App
});

app.$mount('#app');
