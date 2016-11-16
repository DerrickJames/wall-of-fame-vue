import { ADD_NOTE, DELETE_NOTE } from './constants';

export const addNote = ({ commit }, event ) => {

  const newNoteObj = {
    text: '',
    body: ''
  };

  // Trying to access the name of the input element the user is currently editing, by "name"
  const fieldName = event.target.name;
  const newNoteValue = event.target.value;

  // old 
  // const newNoteText = event.target.value;
  //   if (newNoteText.trim())
  //     commit(ADD_NOTE, newNoteText);
    
  //   event.target.value = '';

  if (newNoteValue.trim()) {   //makes sure not empty
    // Once not empty, update newNoteObj with newNoteValue that the user has entered
    newNoteObj[fieldName] = newNoteValue;
    //  We wrote it this way, because...
    //  making the addNote() function "dynamic" so that we can use it for both input elements
    //    ie, if we get the input's fieldName of "text" it will update with text's value
    //        if we get the input's fieldName of "body" if will update with body's value


    // Now we can commit the addnote
    // This is the updated 'newNoteObj' which has new data in it
      //  the value newNoteValue, goes in the text -or- body field, replacing the default empty string
    commit(ADD_NOTE, newNoteObj);

  }
};

export const deleteNote = ({ commit }) => {
  commit(DELETE_NOTE);
};
