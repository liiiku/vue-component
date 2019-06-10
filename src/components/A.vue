<template>
  <div>
    <h1>{{msg}}</h1>
    <component-b></component-b>
    <h2>接收到的数据：{{showMsg}}</h2>
    <!-- <button @click="handleClick">向下给B组件传递数据</button> -->
  </div>
</template>

<script>
import ComponentB from '@/components/B'
import Emitter from '../mixins/emitter.js'
import { EventBus } from '../util.js'
import { findComponentDownward } from '@/utils/assist'
export default {
  name: 'componentA',
  mixins: [Emitter],
  provide: {
    testName: 'AAAAA组件'
  },
  data () {
    return {
      msg: '我是A组件',
      showMsg: ''
    }
  },
  // created () {
  //   this.$on('on-message', this.showMessage)
  // },
  created () {
    EventBus.$on('test', (msg) => {
      console.log(28, msg)
    })
  },
  mounted () {
    const comB = findComponentDownward(this, 'componentB')
    if (comB) {
      console.log(38, '我是从A组件找B组件', comB.msg)
    }
  },
  methods: {
    showMessage (text) {
      this.showMsg = `我是从A组件接受到的信息，${text}`
    }
    // handleClick () {
    //   this.broadcast('componentB', 'send-message', '我来自A组件')
    // }
  },
  components: {
    ComponentB
  }
}
</script>
