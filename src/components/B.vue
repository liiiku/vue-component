<template>
  <div>
    <h1>{{msg}}</h1>
    <button @click="handleClick">从B组件向上传递信息</button>
    <p>用户名是：{{app.userName}}</p>
  </div>
</template>

<script>
import Emitter from '../mixins/emitter.js'
import { EventBus } from '../util.js'
import mixinsThis from '@/mixins/testThis'
import { findComponentUpward } from '@/utils/assist'
export default {
  name: 'componentB',
  mixins: [Emitter, mixinsThis],
  inject: ['testName', 'parentName', 'app'],
  data () {
    return {
      msg: '我是B组件'
    }
  },
  // created () {
  //   this.$on('send-message', this.showMessage)
  // },
  created () {
    EventBus.$on('test', (msg) => {
      console.log(28, msg)
    })
    console.log(30, 'B', this.app)
    this.app.getUserName()
    this.getThis()
  },
  mounted () {
    console.log(35, this.testName, this.parentName)
    const comA = findComponentUpward(this, 'componentA')
    if (comA) {
      console.log(38, '我是从B组件找A组件', comA.msg)
    }
  },
  methods: {
    handleClick () {
      this.dispatch('componentA', 'on-message', 'hello, 我来自B组件')
    }
    // showMessage (text) {
    //   console.log(26, text)
    // }
  }
}
</script>
