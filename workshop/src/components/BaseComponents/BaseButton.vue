<template>
  <button
    :disabled="isDisabled"
    @click="clickAction"
  >
    <slot>
    </slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    isLoading: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    clickAction (event) {
      console.log('emit')
      this.$emit('myEvent', event.target.value)
    }
  },
  computed: {
    isDisabled () {
      return this.$attrs.disabled || this.isLoading
    }
  }
}
</script>

<style scoped>

</style>
