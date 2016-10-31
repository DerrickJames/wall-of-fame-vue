<template>
  <div>
    <h3>Wall Of Fame</h3>
    <p>Wall Of Fame client side implementation using Vue 2.0, Vue-Router 2.0 and Vuex</p>
    <div class="col-sm-4">
      <ul class="list-group">
        <li class="list-group-item" v-for="note in notes">
          {{note.text}}
          <a class="btn btn-default" @click="addNote" href="#">X</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    computed: {
      notes() {
        return this.$store.state.notes;
      }
    },

    methods: {
      ...mapActions({
        addNote: 'deleteNote'
      })
    }
  }
</script>
