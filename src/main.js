// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import store from './stores'
import Vue from 'vue'
import App from '@/app'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import ElSearchTablePagination from 'el-search-table-pagination'
import http from '@http'
import '@styles/index.scss'
import { Table } from 'iview'
import 'iview/dist/styles/iview.css'
Vue.component('i-table', Table)
Vue.use(ElementUI, { size: 'medium', zIndex: 3000 })
Vue.use(ElSearchTablePagination, {
  http
})
if (process.env.NODE_ENV === 'development') {

}
Vue.config.productionTip = false

/*
let demo = function () {
  console.log('被调用了')
}
demo.install = function (Vue, options) {
  console.log('install', options)
  // 1. 添加全局方法或属性
  Vue.myGlobalMethod = function (...args) {
    console.log(1, args)
    // 逻辑...
  }

  // 2. 添加全局资源
  Vue.directive('my-directive', {
    bind (el, binding, vnode, oldVnode, ...args) {
      // 逻辑...
      console.log(2, el, binding, vnode, oldVnode, args)
    }

  })

  // 3. 注入组件
  Vue.mixin({
    created: function (...args) {
      // 逻辑...
      console.log(3, args)
    }

  })

  // 4. 添加实例方法
  Vue.prototype.$myMethod = function (...methodOptions) {
    // 逻辑...
    console.log(5, methodOptions)
  }
}

Vue.use(demo)
*/

// 启动程序
export let start = (router) => {
/* eslint-disable no-new */
  new Vue({
    el: '#app',
    store,
    router,
    components: { App },
    template: '<App/>'
  })
}
