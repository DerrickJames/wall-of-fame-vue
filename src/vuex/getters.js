// Simplifies the way we get our data from the store.
export const allNotes = state => state.notes;

// eg: Line 18 in Home.vue, we import mapGetters
//      on line 22
//  prvioulsy we wrote a computed function called "notes"
//  which returned our "notes" state from our Store
//  Now,
