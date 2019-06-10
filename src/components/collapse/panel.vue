<template>
  <div>
    <div @click="toggle">
      <slot></slot>
    </div>
    <div v-show="isActive">
      <div><slot name="content"></slot></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Panel',
  props: {
    name: {
      type: String
    }
  },
  data () {
    return {
      index: 0, // use index for default when name is null
      isActive: false
    }
  },
  methods: {
    toggle () {
      this.$parent.toggle({
        name: this.name || this.index,
        isActive: this.isActive
      })
    }
  }
}
</script>
