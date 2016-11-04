import { ADD_NOTE, DELETE_NOTE } from './constants';

export const addNote = ({ commit }, event ) => {
  //console.log('event', event);
  commit(ADD_NOTE, $('#someNote').value);
};

export const deleteNote = ({ commit }) => {
  commit(DELETE_NOTE);
};
