<template>
  <button
    :disabled="isDisabled"
    @click="clickAction"
  >
    <slot>
      {{ displayText }}
    </slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    displayText: {
      type: String,
      required: true
    },
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
