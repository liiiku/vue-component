<template>
  <div ref="display"></div>
</template>

<script>
import Vue from 'vue'
import randomStr from '../../utils/random_str.js'

export default {
  name: 'iDisplay',
  props: {
    code: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      html: '',
      js: '',
      css: '',
      component: null,
      id: randomStr()
    }
  },
  mounted () {
    this.renderCode()
  },
  beforeDestroy () {
    this.destroyCode()
  },
  watch: {
    code () {
      this.destroyCode()
      this.renderCode()
    }
  },
  methods: {
    /**
     * 该方法，就是取出<div></div>
     * <template><div></div></template>
     * match(): 这个方法的行为在很大程度上有赖于 regexp 是否具有标志 g。如果 regexp 没有标志 g，那么 match() 方法就只能在 stringObject 中执行一次匹配。
     * 如果没有找到任何匹配的文本， match() 将返回 null。否则，它将返回一个数组，其中存放了与它找到的匹配文本有关的信息。
     */
    getSource (source, type) {
      const regex = new RegExp(`<${type}[^>]*>`)
      let openingTag = source.match(regex)

      // if (!openingTag) {
      //   return ''
      // } else {
      //   openingTag = openingTag[0] // 这时候，就拿到了<template>
      // }
      openingTag = openingTag ? openingTag[0] : ''

      return source.slice(source.indexOf(openingTag) + openingTag.length, source.lastIndexOf(`</${type}>`)) // 取出了template 中的<div></div>
    },
    splitCode () {
      const script = this.getSource(this.code, 'script').replace(/export default/, 'return ')
      const style = this.getSource(this.code, 'style')
      const template = '<div id="my-app">' + this.getSource(this.code, 'template') + '</div>'

      this.js = script
      this.css = style
      this.html = template
    },
    renderCode () {
      this.splitCode()

      if (this.html !== '' && this.js !== '') {
        /**
         * new Function(this.js)() 这里的执行，就相当于：
         * function a() {
         *   return {
         *     data() {return {message: ''}}
         *   }
         * }
         * a() 返回的就是：
         * {
         *    data() {return {message: ''}}
         *  }
         * new Function(this.js) 相当于把字符串转成了一个函数：
         * function a() {
         *   return {
         *     data() {return {message: ''}}
         *   }
         * }
         */
        // eslint-disable-next-line
        const parseStrToFunc = new Function(this.js)()
        console.log(91, this.js)
        // console.log(92, new Function(this.js)())

        parseStrToFunc.template = this.html
        const Component = Vue.extend(parseStrToFunc)
        this.component = new Component().$mount()

        this.$refs.display.appendChild(this.component.$el)

        if (this.css !== '') {
          const style = document.createElement('style')
          style.type = 'text/css'
          style.id = this.id
          style.innerHTML = this.css
          document.getElementsByTagName('head')[0].appendChild(style)
        }
      }
    },
    destroyCode () {
      const $target = document.getElementById(this.id)
      if ($target) $target.parentNode.removeChild($target)

      if (this.component) {
        this.$refs.display.removeChild(this.component.$el)
        this.component.$destroy()
        this.component = null
      }
    }
  }
}
</script>
