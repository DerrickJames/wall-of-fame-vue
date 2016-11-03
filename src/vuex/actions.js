import { ADD_NOTE, DELETE_NOTE } from './constants';

// by default, a Vuex action handler accepts 2 parameter,
// the first being the "context" which is being passed by Vuex,
// and the second param is the payload, which is any data that you
// want to pass to action handler
  // action handler is simply the *asyncronuous* functions that
  // we are creating in the action.js file
  // Meaning: action are the "events" that trigger mutations
    // actions (event) trigger the mutations (event handler)
      // events triggers an event handler
    // can dispatch (click event, eg, @click) an action that triggers a mutation
      // a dispatch is fired by a dom event
export const addNote = ({ commit }) => {
  commit(ADD_NOTE);
};

// // alternatively, IF we did not use {commit} destructing
// export const addNote = (context) => {
//   // context object given to us, from Vuex, and
//   // is accessable **from any actions** that we define
//   context.commit(ADD_NOTE);
// };

export const deleteNote = ({ commit }) => {
  commit(DELETE_NOTE);
};



// alternatively, if I did not 'export' above
// export default { addNote };
