// We USE "export default" when we want to export *a SINGLE value*
// Can ONLY use ONE "export default" statement, per script/file

// The opposite applies when you want to export MULTIPLE values
// Must use "export const nameOne = ({})"
//      and "export const nametwo = ({})"
//     -or- "export let nameOne = ({})"


// Better
// or (same as below)...
// When you "export default" it means that you can
// export and the "name" which you "import" is the name of this .js file,
// so you would "import .... './initialState' "
export default {
  notes: [
    { id: 1, text: 'First Note', favorite: false },
    { id: 2, text: 'Second Note', favorite: false },
    { id: 3, text: 'Third Note', favorite: false }
  ],
  activeNoteID: 1
};
// Then, to import, from *another file* I can import like this...
// import initialState from './initialState';
  // NOTE: No "* as" 
  // NOT: import * as initialState from './initialState';



// OR (same as above)...
// export const initialState = {
//   notes: [
//     { id: 1, text: 'First Note', favorite: false },
//     { id: 2, text: 'Second Note', favorite: false },
//     { id: 3, text: 'Third Note', favorite: false }
//   ],
//   activeNoteID: 1
// };
// Then, to import, from *another file* I can import like this...
// (have to use destructuing)
// import { initialState } from './initialState';
