<template>
  <div>
    <div class="col-md-4">
      <h3>Wall Of Fame</h3>
      <hr>
      <div>

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
      areYouSure(){
        const confirmOrNot = confirm("Are you sure?"); 
        if (confirmOrNot) { return this.removeNote(); } 
      },
      ...mapActions({
        addNote: 'addNote',
        removeNote: 'deleteNote'
      })
    }
  }
</script>
