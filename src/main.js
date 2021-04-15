// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './config/rem'
import {Divider} from 'vant'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { Swipe, SwipeItem,Lazyload } from 'vant';
//引入vant定制主题样式
// import 'vant/lib/index.less'
import 'vant/lib/divider/style/less'
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);

Vue.use(BootstrapVue)
Vue.use(Divider);

// import MintUi from 'mint-ui'
// import 'mint-ui/lib/style.css'

// Vue.use(MintUi)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
