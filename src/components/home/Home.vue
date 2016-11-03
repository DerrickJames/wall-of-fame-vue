<template>
  <div>
    <h3>Wall Of Fame</h3>
    <p>Wall Of Fame client side implementation using Vue 2.0, Vue-Router 2.0 and Vuex</p>
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
  // mapActions maps our actions to any property name we want to access
  import { mapActions, mapGetters } from 'vuex';

  export default {
    computed: {
      // // previous, before using mapGetters, we did the following...
      // notes() {
        // $store available inside any components, which has $store injected in it
        // we injected $store globally in our root file router.js,
        // but if not then we would need to import it like we did for import { mapActions, mapGetters } from 'vuex';
      //   return this.$store.state.notes;
      // }

      // Making 'allNotes' available in the template above
// ** using 'allNotes' as 'notes' in v-for line 7
// ** using 'deleteNote' as 'removeNote' Action in @click directive
      // (directive is anything in HTML which is not part of the HTML attribute)
      // (a "directive" is when we teach HTML new tricks)

      // mapGetters abstracts how we are fetching our notes
        // (1) avoid repetition
        // (2) reuse STORE code in different components
            // * Whole point of Vuex is reusing the store.
      ...mapGetters({
        notes: 'allNotes'
      })
    },

    methods: {
      ...mapActions({
        removeNote: 'deleteNote'
      })
    }
  }
</script>
