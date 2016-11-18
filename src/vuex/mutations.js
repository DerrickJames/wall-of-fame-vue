import { ADD_NOTE, DELETE_NOTE } from './constants';

export const mutations = {
  [ADD_NOTE] (state, newNoteObj) {

    newNoteObj.id = state.notes.length + 1;
    newNoteObj.favorite = false;

    state.notes.push(newNoteObj);
    state.activeNoteID = newNoteObj.id;

  },

  [DELETE_NOTE] (state) {
    const notes = state.notes.filter(note => note.id !== state.activeNoteID);
    state.notes = notes;

    if (state.notes.length > 0) state.activeNoteID = state.notes[0].id;
  }
};
