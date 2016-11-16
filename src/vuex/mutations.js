import { ADD_NOTE, DELETE_NOTE } from './constants';

export const mutations = {
  // The payload is now an Object, not the string as before
  [ADD_NOTE] (state, newNoteObj) {

    // Remember: the newNoteObj (we just passed in) **already has** the 2 values, text & body
    // Next step (below): is adding more data to that obj, the id & setting favorite false.

    // NOTE: Compared to version below, where we passed in a string, we DON'T need to 
    //       create an Object, because *this time* we passed in **AN OBJECT**
    // So, we can just appending "a new property" to the newNoteObj object
    newNoteObj.id = state.notes.length + 1;
    newNoteObj.favorite = false;



    state.notes.push(newNoteObj);
    state.activeNoteID = newNoteObj.id;

    // const newNote = {
    //   id: state.notes.length + 1,
    //   text: newNoteText,
    //   favorite: false
    // };
    // state.notes.push(newNote);
    // state.activeNoteID = newNote.id;
  },

  [DELETE_NOTE] (state) {
    const notes = state.notes.filter(note => note.id !== state.activeNoteID);
    state.notes = notes;

    if (state.notes.length > 0) state.activeNoteID = state.notes[0].id;
  }
};
