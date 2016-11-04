<template>
  <div>
    <h3>Wall Of Fame</h3>
    <p>Wall Of Fame client side implementation using Vue 2.0, Vue-Router 2.0 and Vuex</p>

    <hr>

    <div class="col-sm-12">
<!-- FOR Vuejs <input v-model="theNewNote" class="form-control" type="text"> -->      

      <!-- For Vuex -->
      <input :value="theNewNote" id="someNote" class="form-control" type="text">
      <a class="btn btn-default" @click="addNote" href="#">submit</a>
    </div>

    <hr>

    <div class="col-sm-4">
      <ul class="list-group">
        <li class="list-group-item" v-for="note in notes">
          {{note.text}}
          <a class="btn btn-default" @click="removeNote" href="#">X</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters, mapState } from 'vuex';

  export default {
    data: {
      theNewNote: "Type your new note here...."
    },

    computed: {
      ...mapState({
        theNewNote: state => state.note.text
      }),
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
