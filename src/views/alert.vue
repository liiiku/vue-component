<template>
  <div>
    <button @click="handleOpen1">打开提示1</button>
    <button @click="handleOpen2">打开提示2</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen1 () {
      this.$Alert.info({
        content: '我是提示1'
      })
    },
    handleOpen2 () {
      this.$Alert.info({
        content: '我是一条信息2',
        duration: 10
      })
    }
  }
}
</script>
