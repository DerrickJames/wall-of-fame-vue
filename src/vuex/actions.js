import { ADD_NOTE, DELETE_NOTE } from './constants';

export const addNote = ({ commit }, event ) => {
  // Get data from the input element using the DOM keyboard enter event.

  // event.target.value simply accesses the DOM keyboard enter event triggered
  // once the user has entered data into the input element and presses the enter
  // key on the keyboard and pulls the data from the event object

  // "event" and "event.target" are built into Javascript
  const newNote = event.target.value;

  // newNote.trim() simply trims off any white spaces at the start and end of
  // the input value just to make sure the user doesn't submit empty spaces or empty
  // strings
  if (newNote.trim())
    commit(ADD_NOTE, newNote);

  // Line 18 resets the input element to blank so that the user can continue
  // adding some more notes without having to manually delete the value they had
  // added previously.
  event.target.value = '';
};

export const deleteNote = ({ commit }) => {
  commit(DELETE_NOTE);
};
