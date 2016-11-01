import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex); // Doing Vue.use(Vuex) imports Vuex globally, so you don't have to import Vuex each time you would use it.

// Set initial state to avoid null
// In case you work with team, others can get a sense of "state tree" if they are new to the project
// Kind of like a Seeder in a DB
const initialState = {
  notes: [
    // This is a "collection," an array of objects
    //
    { id: 1, text: 'First Note', favorite: false },
    { id: 2, text: 'Second Note', favorite: false },
    { id: 3, text: 'Third Note', favorite: false }
  ],
  // // In production, you would add an ID to each of the array objects above,
  // // and then here you would identify the 'activeNote' by ID (Instead of rewriting it)
  // activeNote: {text: 'First Note', favorite: false}

  // Now with ID, can select 'activeNote' by ID
  activeNoteID: 1 //Use a new var, called "activeNoteID"
};

// Only alter the State Tree
const mutations = {
  // Creates a New Note.  This is static
  // In the future, we would create a form, then pick data from the form, as opposed to the HArd Coded note on line 30
  ADD_NOTE (state) {
    const newNote = {
      id: 4,             //must be unique
      text: 'New note.', // Instead of this hard coded note, we would allow user, we would get whatever the user is typing
      favorite: false    // allowing user input on the form, eg 'event.target.value' which would grab the value in the input field the user submitted
    };

    state.notes.push(newNote);  //pushing 'const newNote' from line 30
    // // Before we added ID, we were telling the state that the .activeNote is "newNote"
    // state.activeNote = newNote;

    // Now, we overwriteing state.activeNoteID, to the newNote's id
    // Bacially, telling the state that the activeNoteID we should be focused on, is our newNote, ID #4
    state.activeNoteID = newNote.id;
  },

  DELETE_NOTE (state) {
    //state.notes.$remove(state.activeNote);

    // // First create a new array, of everything but the note we are about delete
    // const notes = state.notes.filter(note => note.text !== state.activeNote.text);
    // // Overwriting the old array, with the new array we just created (which has our activeNote deleted)
    // state.notes = notes;
    // // Resetting the activeNote, to the first element
    // state.activeNote = state.notes[0];

    // Rewrite, using activeNoteID
    const notes = state.notes.filter(note => note.id !== state.activeNoteID);
    state.notes = notes;
    // state.notes[0].id: Accessing first element in array, notes[0],
    // and then accessing the id value by .id (b/c state.activeNoteID is expecting an id value)
    // before it expected an object, now it expects an id value
    state.activeNoteID = state.notes[0].id;
  }
};

// Like an event, where the events get triggered (dispatched), the actual process you want to initiate
// You write the actions, that will trigger the mutations
const actions = {
  // context is what is passed by Vuex
  // Any action you define, accepts a "context" which is simply an object being passed by Vuex
  // with properties that would allow dispatching -or- committing mutations
    // Remember you cannot directly invoke a mutation, instead you
    // "dispatch/commit" by passing the type of mutation that you want to trigger
  // Every method inside the "actions" recieves a "context" from Vuex
  // ie, every method inside "actions" have .commit or .dispatch available to them
  deleteNote(context) {
    console.log(context); // if you want inspect the context object, you simply log it and see it in DevTools
    context.commit('DELETE_NOTE');
  }
};

export default new Vuex.Store({
  state: initialState,
  mutations,
  actions
});
