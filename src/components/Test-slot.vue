<template>
  <div>
    <p>组件名：{{title}}</p>
    <slot name="test"></slot>
    <slot>占位符，没内容的时候显示我</slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '我是slot组件'
    }
  }
}
</script>

<style>
</style>
