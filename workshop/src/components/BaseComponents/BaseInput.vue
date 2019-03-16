<template>
  <label for="">
    <input
      type="text"
      :value="value"
      :style="`background-color: ${backgroundColor}`"
      @input="inputAction"
    >
  </label>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'BaseInput',
  props: {
    value: {
      type: String,
      required: true
    },
    backgroundColor: {
      type: String,
      required: false
    }
  },
  methods: {
    inputAction (event) {
      console.log('emit')
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style scoped>

</style>
