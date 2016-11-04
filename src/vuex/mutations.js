import { ADD_NOTE, DELETE_NOTE } from './constants';

export const mutations = {
  [ADD_NOTE] (state, theNewNote) {
    console.log(theNewNote)
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