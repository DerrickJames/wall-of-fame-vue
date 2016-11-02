import Vue from 'vue';
import Vuex from 'vuex';
import App from './components/App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import store from './vuex/store';
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
  store,
  router,
  ...App  // we are passing *the properties* of App, into the new instance of Vue (bacically into Vue's constructor)
});

app.$mount('#application');
