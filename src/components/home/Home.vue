<template>
  <div>
    <h3>Wall Of Fame</h3>
    <p>Wall Of Fame client side implementation using Vue 2.0, Vue-Router 2.0 and Vuex</p>
    <div class="col-sm-4">
      <ul class="list-group">
        <li class="list-group-item" v-for="note in notes">
          {{note.text}}
          <a class="btn btn-default" @click="deleteNote" href="#">X</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  // mapActions maps our actions to any property name we want to access
  import { mapActions } from 'vuex';

  export default {
    computed: {
      notes() {
        return this.$store.state.notes;
      }
    },

    methods: {
      // By this approach, instead of using the long approach using a dispatch,
      // we can simply map the store actions to vuejs "this." keyword

      // // simply mapping this.delete() note to this.$store.dispatch('deleteNote')
      // ...mapActions({
      //   deleteNote: 'deleteNote'
      // })

      // INSTEAD of doing mapActions, we could do...
      deleteNote() {
        return this.$store.dispatch('deleteNote') // dispatch allows you to chain, b/c of the promise, where .commit does not
      }
      // eg: deleteNote() => this.$store.dispatch('deleteNote')
      //                                .then(()=> {  } ) // NO async action to perform, so nothing to do and we'd get an error

      // Use dispatch when you are expecting to get a response back, eg if you are hitting an API where you always get a success or error response, when you use dispatch, you can respond to your user depending on response.

      // Can also do .commit
      // deleteNote() => this.$store.commit('deleteNote')
    }
  }
</script>
