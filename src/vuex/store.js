import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';
import initialState from './initialState';
import { ADD_NOTE, DELETE_NOTE } from './constants';

Vue.use(Vuex);


export default new Vuex.Store({
  state: initialState,
  ...mutations,
  actions,
  getters
});
