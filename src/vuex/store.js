import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import { ADD_NOTE, DELETE_NOTE } from './constants';

Vue.use(Vuex);

const initialState = {
  notes: [
    { id: 1, text: 'First Note', favorite: false },
    { id: 2, text: 'Second Note', favorite: false },
    { id: 3, text: 'Third Note', favorite: false }
  ],
  activeNoteID: 1
};

const mutations = {
  [ADD_NOTE] (state) {
    const newNote = {
      id: 4,
      text: 'New note.',
      favorite: false
    };

    state.notes.push(newNote);
    state.activeNoteID = newNote.id;
  },

  [DELETE_NOTE] (state) {
    const notes = state.notes.filter(note => note.id !== state.activeNoteID);
    state.notes = notes;
    state.activeNoteID = state.notes[0].id;
  }
};

export default new Vuex.Store({
  state: initialState,
  mutations,
  actions,
  getters
});
