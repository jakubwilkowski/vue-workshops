<template>
  <div class="home">
    <h1>Home</h1>
    <BaseButton
      display-text="Set Admin"
      disabled="true"
      @myEvent="setAdmin()"
    ></BaseButton>
    <BaseButton
      display-text="Unset Admin"
      :isLoading="isLoading"
      @myEvent="unsetAdmin()"
    ></BaseButton>
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
    }
  }
}
</script>
