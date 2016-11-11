import { ADD_NOTE, DELETE_NOTE } from './constants';

export const addNote = ({ commit }, event ) => {

  const newNoteText = event.target.value;

  if (newNoteText.trim())
    commit(ADD_NOTE, newNoteText);
  
  event.target.value = '';
};

export const deleteNote = ({ commit }) => {
  commit(DELETE_NOTE);
};
