import { ADD_NOTE, DELETE_NOTE } from './constants';

export const addNote = ({ commit }, event ) => {

  const newNoteObj = {
    text: '',
    body: ''
  };

  // Trying to access the name of the input element the user is currently editing, by "name"
  const fieldName = event.target.name;
  const newNoteValue = event.target.value;

  if (newNoteValue.trim()) {  
    newNoteObj[fieldName] = newNoteValue;
    commit(ADD_NOTE, newNoteObj);
  }
  
};

export const deleteNote = ({ commit }) => {
  commit(DELETE_NOTE);
};
