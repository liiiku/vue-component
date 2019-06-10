<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <component-a></component-a>
    <!-- <h2>接收到的数据：{{showMsg}}</h2> -->
    <test-slot>
      Test-Slot
      <p slot="test">test-slot</p>
    </test-slot>
  </div>
</template>

<script>
import ComponentA from '@/components/A'
import TestSlot from '@/components/Test-slot'
import mixinsThis from '@/mixins/testThis'
export default {
  name: 'HelloWorld',
  mixins: [mixinsThis],
  provide () {
    return {
      parentName: '我是你们的祖先组件哦！',
      app: this
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      showMsg: '',
      userName: ''
    }
  },
  created () {
    this.$on('on-message', this.showMessage)
    this.getThis()
  },
  mounted () {
    console.log(28, this.$children[1].title)
  },
  methods: {
    showMessage (text) {
      this.showMsg = `我是从HelloWorld组件接受到的信息，${text}`
    },
    getUserName () {
      this.userName = 'helloworld'
    }
  },
  components: {
    ComponentA,
    TestSlot
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
