<template>
  <div>
    <div class="col-md-4">
      <h3>Wall Of Fame</h3>
      <hr>
      <div>
        <!-- executing the "Action" (aka the "event handler") addNote, which we wrote in Actions.js -->
        <input
          name="text"
          @keyup.enter="addNote"
          class="form-control"
          type="text"
          placeholder="Add a new note">
        <input
          name="body" 
          @keyup.enter="addNote"
          class="form-control"
          type="text"
          placeholder="Add a new note">

        <!-- must rewrite addNote action, to handle form submission -->
        <!-- right now, it only handles event.target.value, on the 'input' above -->
        <!-- <a class="btn btn-default" @click="addNote" href="#">Create the Note</a> -->
      </div>

      <hr>

      <div>
        <ul class="list-group">
          <li class="list-group-item" v-for="note in notes">
            <h4>Title: {{note.text}}</h4>
            <span>Body: {{note.body}}</span>
            <!-- Before we added areYouSure() -->
            <a class="btn btn-default" @click="removeNote" href="#">X</a>
            <!-- <a class="btn btn-default" @click="areYouSure" href="#">X</a> -->
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters({
        notes: 'allNotes'
      })
    },

    methods: {
      // Use of local method
      areYouSure(){
        const confirmOrNot = confirm("Are you sure?"); // confirm() returns bool
        if (confirmOrNot) { return this.removeNote(); } // we use "this." to access methods/data b/c we are INSIDE the same object
      },
      ...mapActions({
        addNote: 'addNote',
        removeNote: 'deleteNote'
      })
    }
  }
</script>
