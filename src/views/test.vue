<template>
  <div>
    <p>{{this.msg}}</p>
    <button @click="stopNum">停止</button>
    <button @click="setTimer">恢复</button>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      msg: 1,
      timer: null
    }
  },
  mounted () {
    this.setTimer()
  },
  methods: {
    say () {
      this.msg += 1
    },
    stopNum () {
      clearInterval(this.timer)
    },
    setTimer () {
      clearInterval(this.timer)
      this.timer = setInterval(this.say, 1000)
    }
  }
}
</script>
