// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'

import {getCookie} from './l18n/lang/cookie.js'

Vue.config.productionTip = false
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: getCookie('PLAY_LANG', 'zh'), // 语言标识
  messages: {
    'ja': require('@/l18n/lang/ja'),
    'zh': require('@/l18n/lang/zh')
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  i18n
})
