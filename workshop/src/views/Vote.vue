<template>
  <div class="vote">
    <BaseInput
      v-model="inputValue"
      backgroundColor="#00F"
    >
    </BaseInput>
    <h4>{{ inputValue }}</h4>
    <VoteOptions></VoteOptions>
  </div>
</template>

<script>
import BaseInput from '@/components/BaseComponents/BaseInput.vue'
import VoteOptions from '@/components/VoteOptions.vue'

export default {
  name: 'Vote',
  data () {
    return {
      inputValue: 'dupa'
    }
  },
  components: {
    BaseInput,
    VoteOptions,
  }
}
</script>
