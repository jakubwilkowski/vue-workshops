<template>
  <div class="settings">
    <h1>Settings</h1>
  </div>
</template>

<script>

export default {
  name: 'Settings',
  beforeRouteEnter (to, from, next) {
    let isAdmin = localStorage.getItem('isAdmin')
    console.log(isAdmin)
    if (isAdmin !== 'true') {
      return next({
        path: '/'
      })
    }

    return next()
  }
}
</script>
