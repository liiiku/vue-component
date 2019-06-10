export default {
  functional: true,
  props: {
    row: Object, // 当前行数据
    column: Object, // 当前列数据
    index: Number, // 当前是第几行
    render: Function // 自定义的render函数内容
  },
  render: (h, ctx) => {
    const params = {
      row: ctx.props.row,
      column: ctx.props.column,
      index: ctx.props.index
    }

    return ctx.props.render(h, params)
  }
}
