import { ADD_NOTE, DELETE_NOTE } from './constants';

// using the addNote mutation, from mutations.js
export const addNote = ({ commit }) => {

  const newNoteObj = {
    text: document.getElementById('text').value,
    body: document.getElementById('body').value
  };

  console.log(newNoteObj);
  // run the ADD_NOTE mutation
  // Vuex knows how to import & call the mutations for us
  commit(ADD_NOTE, newNoteObj);
};

export const deleteNote = ({ commit }) => {
  commit(DELETE_NOTE);
};