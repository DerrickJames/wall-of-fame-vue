import { ADD_NOTE, DELETE_NOTE } from './constants';

// using the addNote mutation, from mutations.js
export const addNote = ({ commit }) => {

  // validating text and body not empty
  const newText = document.getElementById('text').value
  if (newText.trim().length == 0) {
    // if we return nothing, it will exit, will simply stop running
    return;
  }

  const newBody = document.getElementById('body').value
  if (newBody.trim().length == 0) {
    return;
  }

  // This is a new object, not a function:
  // Don't have to pass in vars, b/c we are inside the same addNote function
  // newText & newBody are local variables to the addNote function
  const newNoteObj = {
    text: newText,
    body: newBody
  };

  console.log(newNoteObj);
  // run the ADD_NOTE mutation
  // Vuex knows how to import & call the mutations for us
  commit(ADD_NOTE, newNoteObj);
};

export const deleteNote = ({ commit }) => {
  commit(DELETE_NOTE);
};