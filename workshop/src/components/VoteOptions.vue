<template>
  <div>
    <ul
      v-for="option in voteOptions"
      :key="option"
    >
      <li>
        <BaseButton>{{ option }}</BaseButton>
      </li>
    </ul>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseComponents/BaseButton.vue'

export default {
  name: 'VoteOptions',
  components: {
    BaseButton
  },
  data () {
    return {
      voteOptions: {
        optA: 'yes',
        optB: 'no',
        optC: 'fuckit'
      }
    }
  }
}
</script>

<style scoped>

</style>
