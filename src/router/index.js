import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import A from '@/components/A'
import B from '@/components/B'
import C from '@/components/C'
import Display from '@/views/display'
import Alert from '@/views/alert'
import TableRender from '@/views/table-render'
import TableSlot from '@/views/table-slot'
import TestUser from '@/components/test-user'
import Set from '@/views/set'
import InputNumber from '@/views/input-number/index'
import Test from '@/views/test'
import Collapse from '@/views/collapse'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/a',
      name: 'A',
      component: A
    },
    {
      path: '/b',
      name: 'B',
      component: B
    },
    {
      path: '/c',
      name: 'C',
      component: C
    },
    {
      path: '/display',
      name: 'Display',
      component: Display
    },
    {
      path: '/alert',
      name: 'Alert',
      component: Alert
    },
    {
      path: '/table',
      name: 'TableRender',
      component: TableRender
    },
    {
      path: '/table-slot',
      name: 'TableSlot',
      component: TableSlot
    },
    {
      path: '/test-user',
      name: 'slot',
      component: TestUser
    },
    {
      path: '/set',
      name: 'set',
      component: Set
    },
    {
      path: '/input-number',
      name: 'InputNumber',
      component: InputNumber
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/collapse',
      name: 'Collapse',
      component: Collapse
    }
  ]
})
