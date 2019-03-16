<template>
  <div class="settings">
    <h1>Settings</h1>
    {{ isAdmin }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import store from './../store/store'

export default {
  name: 'Settings',
  computed: {
    ...mapGetters('users', ['isAdmin'])
  },
  beforeRouteEnter (to, from, next) {
    let isAdmin = store.state.users.isAdmin
    if (isAdmin !== true) {
      return next({
        path: '/'
      })
    }
    return next()
  }
}
</script>
