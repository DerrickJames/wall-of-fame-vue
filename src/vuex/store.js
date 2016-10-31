import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const initialState = {
  notes: [
    { text: 'First Note', favouite: false },
    { text: 'Second Note', favouite: false },
    { text: 'Third Note', favouite: false }
  ],
  activeNote: {text: 'First Note', favorite: false}
};

const mutations = {
  ADD_NOTE (state) {
    const newNote = {
      text: 'New note.',
      favorite: false
    };

    state.notes.push(newNote);
    state.activeNote = newNote;
  },

  DELETE_NOTE (state) {
    //state.notes.$remove(state.activeNote);
    const notes = state.notes.filter(note => note.text != state.activeNote.text);
    state.notes = notes;
    state.activeNote = state.notes[0];
  }
};

const actions = {
  deleteNote(context) {
    context.commit('DELETE_NOTE');
  }
};

export default new Vuex.Store({
  state: initialState,
  mutations,
  actions
});
