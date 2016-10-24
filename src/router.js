import Vue from 'vue';
import App from './components/App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import { HOME_ROUTES } from './components/home/home-routes';
import { ABOUT_ROUTES } from './components/about/about-routes';

// This is the root file, so this is where you would load any Global libraries
// Global libraries: libraries that you want to have it accessible throughtout the app

Vue.use(VueResource);
Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    HOME_ROUTES,
    ABOUT_ROUTES
  ]
});

const app = new Vue({
  router, // passing the instance of VueRouter
  ...App  // we are passing *the properties* of App, into the new instance of Vue (bacically into Vue's constructor)
});

app.$mount('#application'); //IN THE app div in App.vue (remember, we just copied properties from components/App.vue)
