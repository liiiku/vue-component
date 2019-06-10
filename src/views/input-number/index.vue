<template>
  <!-- <input-number v-model="value"/> -->
  <!-- <input-number :value="value" @input="handleChage"/> -->
  <input-number :number="value" @change="handleChage"/>
</template>

<script>
import InputNumber from './input-number'
export default {
  components: {
    InputNumber
  },
  data () {
    return {
      value: 100
    }
  },
  methods: {
    handleChage (val) {
      this.value = val
    }
  }
}
</script>
