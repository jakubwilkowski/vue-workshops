<template>
  <div class="home">
    <h1>Vote</h1>
    <button @click="setAdmin">
      Set admin
    </button>
    <button @click="unsetAdmin">
      Unset admin
    </button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    setAdmin () {
      localStorage.setItem('isAdmin', 'true')
    },
    unsetAdmin () {
      localStorage.setItem('isAdmin', 'false')
    }
  }
}
</script>
