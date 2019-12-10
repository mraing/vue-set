import Vue from 'vue'
import Router from 'vue-router'
import Datav from '@/components/Datav'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Datav',
      component: Datav
    }
  ]
})
