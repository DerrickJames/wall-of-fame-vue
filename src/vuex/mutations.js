import { ADD_NOTE, DELETE_NOTE } from './constants';

export const mutations = {
  [ADD_NOTE] (state, newNoteObj) {

    console.log(newNoteObj);
    newNoteObj.id = state.notes.length + 1;
    newNoteObj.favorite = false;
    console.log(newNoteObj);

    state.notes.push(newNoteObj);
    console.log(state);

    state.activeNoteID = newNoteObj.id;

  },

  [DELETE_NOTE] (state) {
    const notes = state.notes.filter(note => note.id !== state.activeNoteID);
    state.notes = notes;

    if (state.notes.length > 0) state.activeNoteID = state.notes[0].id;
  }
};
