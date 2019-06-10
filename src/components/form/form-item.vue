<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
import Emitter from '../../mixins/emitter.js'
export default {
  name: 'iFormItem',
  mixins: [Emitter],
  inject: ['form'],
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String
    },
  },
  data () {
    return {
      validateState: '', // 校验状态
      validateMessage: '', // 校验不通过的提示信息
    }
  },
  computed: {
    // 从 Form 的 model中动态得到当前表单组件的数据
    fieldValue () {
      return this.form.model[this.prop]
    }
  },
  mounted () {
    if (this.prop) {
      this.dispatch('iForm', 'on-form-item-add', this)
    }
    this.setRules()
  },
  beforeDestroy () {
    this.dispatch('iForm', 'on-form-item-remove', this)
  },
  methods: {
    setRules () {
      this.$on('on-form-blur', this.onFieldBlur)
      this.$on('on-form-change', this.onFieldChange)
    },
    getRules () {
      let formRules = this.form.rules
      formRules = formRules ? formRules[this.prop] : []
      return [].concat(formRules || [])
    },
    // 只支持 blur 和 change ，所以过滤出符合要求的 rule规则
    getFilteredRule (trigger) {
      const rules = this.getRules()
      // rule => !rule.trigger 这个的意思是默认用blur 和 change校验？
      return rules.filter(rule => !rule.trigger || rule.trigger.indexOf(trigger) !== -1)
    }
  }
}
</script>
