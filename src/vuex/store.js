import Vue from 'vue';
import Vuex from 'vuex';

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
  ADD_NOTE (state) {
    const newNote = {
      id: 4,             
      text: 'New note.', 
      favorite: false
    };

    state.notes.push(newNote); 
    state.activeNoteID = newNote.id;
  },

  DELETE_NOTE (state) {
    const notes = state.notes.filter(note => note.id !== state.activeNoteID);
    state.notes = notes;
    state.activeNoteID = state.notes[0].id;
  }
};

const actions = {
  deleteNote(context) {
    // console.log(context); 
    context.commit('DELETE_NOTE');
  }
};

export default new Vuex.Store({
  state: initialState,
  mutations,
  actions
});
