const code = `
  <template>
    <div>
      <p>请输入名字：</p>
      <input v-model="message">
      {{message}}
    </div>
  </template>
  <script>
    export default {
      data () {
        return {
          message: ''
        }
      }
    }
  </script>
`

export default code
