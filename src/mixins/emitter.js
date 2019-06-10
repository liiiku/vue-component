function broadcast (componentName, eventName, params) {
  console.log(2, this)
  this.$children.forEach(child => {
    const name = child.$options.name

    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params))
    } else {
      broadcast.apply(child, [componentName, eventName].concat([params]))
    }
  })
}

function dispatch (componentName, eventName, params) {
  let parent = this.$parent || this.$root
  let name = parent.$options.name
  console.log(17, this, parent)

  // 如果没有写指定的name，就会一直递归的往上找，直到undefined，所以while循环后，29行后的if判断不会执行
  while (parent && (!name || name !== componentName)) {
    parent = parent.$parent
    console.log(22, parent)

    if (parent) {
      name = parent.$options.name
    }
  }
  console.log(28, parent)
  if (parent) {
    console.log(30, parent)
    parent.$emit.apply(parent, [eventName].concat(params))
  }
}

export default {
  methods: {
    // dispatch (componentName, eventName, params) {
    //   let parent = this.$parent || this.$root
    //   let name = parent.$options.name
    //   console.log(18, this, parent)

    //   // 如果没有写指定的name，就会一直递归的往上找，直到undefined，所以while循环后，29行后的if判断不会执行
    //   while (parent && (!name || name !== componentName)) {
    //     parent = parent.$parent
    //     console.log(23, parent)

    //     if (parent) {
    //       name = parent.$options.name
    //     }
    //   }
    //   console.log(29, parent)
    //   if (parent) {
    //     console.log(31, parent)
    //     parent.$emit.apply(parent, [eventName].concat(params))
    //   }
    // },
    dispatch (componentName, eventName, params) {
      dispatch.call(this, componentName, eventName, params)
    },
    broadcast (componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params)
    }
  }
}
