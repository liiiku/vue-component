<template>
  <div>
    <button @click="increase(-1)">减 1</button>
    <span>{{ currentValue }}</span>
    <button @click="increase(1)">加 1</button>
  </div>
</template>

<script>
export default {
  name: 'InputNumber',
  props: {
    number: {
      type: Number
    }
  },
  model: {
    prop: 'number',
    event: 'change'
  },
  data () {
    return {
      // currentValue: this.value
      currentValue: this.number
    }
  },
  watch: {
    // value (val) {
    //   this.currentValue = val
    // }
    number (val) {
      this.currentValue = val
    }
  },
  methods: {
    increase (val) {
      this.currentValue += val
      // this.$emit('input', this.currentValue)
      this.$emit('change', this.currentValue)
    }
  }
}
</script>
