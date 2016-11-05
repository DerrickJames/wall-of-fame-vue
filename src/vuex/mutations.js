import { ADD_NOTE, DELETE_NOTE } from './constants';

export const mutations = {
  [ADD_NOTE] (state, theNewNote) {
    const newNote = {
      // state.notes.length gets the number of elements in the notes array
      id: state.notes.length + 1, // we're incrementing the notes IDS automatically
      // we're assigning our new note value to the text property
      text: theNewNote,
      favorite: false
    };

    state.notes.push(newNote);
    state.activeNoteID = newNote.id;
  },

  [DELETE_NOTE] (state) {
    const notes = state.notes.filter(note => note.id !== state.activeNoteID);
    state.notes = notes;

    if (state.notes.length > 0) state.activeNoteID = state.notes[0].id;
  }
};
