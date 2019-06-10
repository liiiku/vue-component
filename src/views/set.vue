<template>
  <div>
    <ul>
      <li v-for="(item, index) in items" :key="index">{{item}}</li>
    </ul>
    <button @click="handler">改变列表吧</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: ['a', 'b', 'c']
    }
  },
  methods: {
    handler () {
      // this.items[1] = 'x'
      this.$set(this.items, 1, 'x')
      console.log(this.items)
    }
  }
}
</script>
