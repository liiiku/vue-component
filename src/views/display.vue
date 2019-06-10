<template>
  <div>
    <h1>动态渲染 .vue 文件的组件 -Display</h1>
    <i-display :code="code"></i-display>
  </div>
</template>

<script>
import iDisplay from '../components/display/display'
import defaultCode from './default-code.js'

export default {
  name: 'display',
  data () {
    return {
      code: defaultCode
    }
  },
  components: {
    iDisplay
  }
}
</script>
