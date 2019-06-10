<template>
  <div>
    <h1>{{msg}}</h1>
    <button @click="handleClick">派发事件</button>
  </div>
</template>

<script>
import { EventBus } from '../util.js'
export default {
  name: 'componentC',
  data () {
    return {
      msg: '我是C组件'
    }
  },
  methods: {
    handleClick () {
      console.log(19)
      EventBus.$emit('test', '我来自C组件')
    }
  }
}
</script>
