<template>
  <div class="home">
    <h1>Home</h1>
    <BaseButton
      disabled="true"
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

export default {
  name: 'Home',
  data () {
    return {
      isLoading: false
    }
  },
  components: {
    BaseButton
  },
  methods: {
    setAdmin () {
      console.log('set')
      localStorage.setItem('isAdmin', 'true')
    },
    unsetAdmin () {
      this.isLoading = !this.isLoading
      console.log('unset')
      localStorage.setItem('isAdmin', 'false')
      setTimeout(() => { this.isLoading = !this.isLoading }, 1000)
    }
  }
}
</script>
