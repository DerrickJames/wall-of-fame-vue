import { ADD_NOTE, DELETE_NOTE } from './constants';
import toastr from 'toastr';

export const addNote = ({ commit }) => {

  const newText = document.getElementById('text').value;

  if (newText.trim().length == 0) {
    return toastr.error("You need to fill this out, dude!");
  }

  const newBody = document.getElementById('body').value;

  if (newBody.trim().length == 0) {
    return toastr.error("Fill in the body, fool.");
  }

  const newNoteObj = {
    text: newText,
    body: newBody
  };

  commit(ADD_NOTE, newNoteObj);
};

export const deleteNote = ({ commit }) => {
  commit(DELETE_NOTE);
};
