<template>
  <div>
    <div class="col-md-4">
      <h3>Wall Of Fame</h3>
      <hr>
      <div>
        <!-- FOR Vuejs <input v-model="theNewNote" class="form-control" type="text"> -->

        <!-- For Vuex -->
        <input
          @keyup.enter="addNote"
          class="form-control"
          type="text"
          placeholder="Add a new note">
      </div>

      <hr>

      <div>
        <ul class="list-group">
          <li class="list-group-item" v-for="note in notes">
            {{note.text}}
            <a class="btn btn-default" @click="removeNote" href="#">X</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters, mapState } from 'vuex';

  export default {
    computed: {
      ...mapGetters({
        notes: 'allNotes'
      })
    },

    methods: {
      ...mapActions({
        addNote: 'addNote',
        removeNote: 'deleteNote'
      })
    }
  }
</script>
