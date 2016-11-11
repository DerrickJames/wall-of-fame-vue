import { ADD_NOTE, DELETE_NOTE } from './constants';

// commit given to us by the context object, given to us by Vuex
  // so by default, Vuex know how to handle the action we defined, by passing in the
  // context object with properties that would allow the use of Vuex inside our actions
  // eg, commit (or "disptach"), which allows us to commit/dispatch our mutation
  // Other properties as well, which helps us interact with the store (other than commit/dispatch).

// "event" is given to us as part of Javascript WHEN IN THE DOM
// Thus, it is a DOM EVENT
export const addNote = ({ commit }, event ) => {
  // Get data from the input element using the DOM keyboard enter event.

  // event.target.value simply accesses the DOM keyboard enter event triggered
  // once the user has entered data into the input element and presses the enter
  // key on the keyboard and pulls the data from the event object

  // "event" and "event.target" are built into Javascript
  // Accessing the <input>s value attribute (b/c we are using this inside <input>)
  const newNoteText = event.target.value;

  // newNoteText.trim() simply trims off any white spaces at the start and end of
  // the input value just to make sure the user doesn't submit empty spaces or empty
  // strings
  if (newNoteText.trim())
    commit(ADD_NOTE, newNoteText);

  // Line 18 resets the input element to blank so that the user can continue
  // adding some more notes without having to manually delete the value they had
  // added previously.
  event.target.value = '';
};

export const deleteNote = ({ commit }) => {
  commit(DELETE_NOTE);
};
