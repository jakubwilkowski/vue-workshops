<template>
  <div class="home">
    <h1>Home</h1>
    <BaseButton
      :isLoading="isLoadingSet"
      @myEvent="setAdmin()"
    >
      Set Admin
    </BaseButton>
    <BaseButton
      :isLoading="isLoading"
      @myEvent="unsetAdmin()"
    >
      Unset Admin
    </BaseButton>
  </div>
</template>

<script>

import BaseButton from '@/components/BaseComponents/BaseButton.vue'
import { mapActions } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      isLoading: false,
      isLoadingSet: false
    }
  },
  components: {
    BaseButton
  },
  methods: {
    ...mapActions('users', ['setIsAdmin']),
    setAdmin () {
      this.isLoadingSet = !this.isLoadingSet
      console.log('set')
      this.$store.dispatch('users/setIsAdmin', true)
      setTimeout(() => { this.isLoadingSet = !this.isLoadingSet }, 1000)
    },
    unsetAdmin () {
      this.isLoading = !this.isLoading
      console.log('unset')
      this.$store.dispatch('users/setIsAdmin', false)
      setTimeout(() => { this.isLoading = !this.isLoading }, 1000)
    }
  }
}
</script>
