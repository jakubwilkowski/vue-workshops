<template>
  <div class="vote">
    <BaseInput
      v-model="inputValue"
      backgroundColor="#00F"
    >
    </BaseInput>
    <h4>{{ inputValue }}</h4>
  </div>
</template>

<script>
import BaseInput from '@/components/BaseComponents/BaseInput.vue'

export default {
  name: 'Vote',
  data () {
    return {
      inputValue: 'dupa'
    }
  },
  components: {
    BaseInput
  }
}
</script>
