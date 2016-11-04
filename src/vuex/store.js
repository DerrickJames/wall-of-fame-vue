import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
// import * as actions from './actions' GIVE US...
// Give us: actions.addNote()  and  actions.deleteNote()

// Alternatively, we could have done...
// import { addNote, deleteNote } from './actions';
// then I can do (b/c of destructuring):
// addNote()  and  deleteNote()


import * as getters from './getters';
import * as mutations from './mutations';
import initialState from './initialState';
import { ADD_NOTE, DELETE_NOTE } from './constants';

Vue.use(Vuex);

// const initialState = {
//   notes: [
//     { id: 1, text: 'First Note', favorite: false },
//     { id: 2, text: 'Second Note', favorite: false },
//     { id: 3, text: 'Third Note', favorite: false }
//   ],
//   activeNoteID: 1
// };

// const mutations = {
//   [ADD_NOTE] (state) {
//     const newNote = {
//       id: 4,
//       text: 'New note.',
//       favorite: false
//     };

//     state.notes.push(newNote);
//     state.activeNoteID = newNote.id;
//   },

//   [DELETE_NOTE] (state) {
//     const notes = state.notes.filter(note => note.id !== state.activeNoteID);
//     state.notes = notes;
//     state.activeNoteID = state.notes[0].id;
//   }
// };

export default new Vuex.Store({
  state: initialState,
  ...mutations, //WORKS!!  I GUESSED THIS!  Remind me, what does it do??
  actions,      // we are passing *the properties* of mutations,
  getters       // (bacically into some? constructor) ???  PLEASE EXPLAIN AGAIN
});
