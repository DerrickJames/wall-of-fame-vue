<template>
  <div>
    <div class="col-md-4">
      <h3>Wall Of Fame</h3>
      <hr>
      <div>
        <!-- FOR Vuejs <input v-model="theNewNote" class="form-control" type="text"> -->

        <!-- For Vuex -->
        <!-- Here, we are executing the "Action" (aka the "event handler") addNote, which we wrote in Actions.js -->
        <input
          @keyup.enter="addNote"
          class="form-control"
          type="text"
          placeholder="Add a new note">
          <!-- Note: '@keyup.enter="addNote"' and 'v-model="theNewNote"' both given to us by Vuejs
            However, if using Vuex, it is suggested to use '@keyup.enter="addNote"', b/c v-model gets confusing.  -->
      </div>

      <hr>

      <div>
        <ul class="list-group">
          <li class="list-group-item" v-for="note in notes">
            {{note.text}}
            <!-- Before we added areYouSure() -->
            <!-- <a class="btn btn-default" @click="removeNote" href="#">X</a> -->
            <a class="btn btn-default" @click="areYouSure" href="#">X</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  // Saves you from individually importing all the "actions" and "getters", which you
  // would have done individually (and would have needed to export them)
  import { mapActions, mapGetters } from 'vuex';

  // computed vs methods:
  // Use *computed* when you are trying to return data that should be rendered, or data that has to be manupulated, or calculated
    // - transforming data for how it needs to be desplayed
  // Use *methods* when you are trying to write a function/method to perform any action (not neccessarily a Vuex Action)
  // methods is part of Vuejs
    // - eg, want to hide/display different data
    // - eg, we have a model, we want the model displayed when a user clicks on a button,
    //       write a function inside the method's property, we COULD write it in "methods: {}" and then just use it in our markup
    // SEE EXAMPLE method "areYouSure()" popup (to be used only in this component) below

    // If we are not using Vuex, we would write methods here
    // However, if we are using Vuex, and want to centralize the state, we could write
    // the methods (some as actions) in another file to be used in a shared store, 
    // and then pull them in here for use by using mapActions
      // Note: writing in another file, is just "abstraction" which we could do with just Vuejs
      //        when you are using the shared store (the state object) THEN you are using Vuex

  export default {
    computed: {
      ...mapGetters({
        notes: 'allNotes'
      })
    },

    // 
    methods: {
      // Use of local method
      areYouSure(){
        const confirmOrNot = confirm("Are you sure?"); // confirm() returns bool
        if (confirmOrNot) { return this.removeNote(); } // we use "this." to access methods/data b/c we are INSIDE the same object
      },


      // mapActions automatically knows how to pull in addNote and deleteNote from action.js,
      // so we do NOT have to do "import { addNote, deleteNote } from 'actions';"
      ...mapActions({
        addNote: 'addNote',
        removeNote: 'deleteNote'
      })
      // Alternatively, if you want to use the same name, can pass in as ARRAY
      // ...mapActions([
      //     // Note, it is a string.  Use the original name, 'deleteNote'
      //     'addNote',
      //     'deleteNote'
      //   ])
    }
  }
</script>
