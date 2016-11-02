import { ADD_NOTE, DELETE_NOTE } from './constants';

export const addNote = ({ commit }) => {
  commit(ADD_NOTE);
};

export const deleteNote = ({ commit }) => {
  commit(DELETE_NOTE);
};
