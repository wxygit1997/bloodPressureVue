// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './config/rem'
import axios from 'axios'
import axiosInit from "./api/axios-init"
import axiosInit2 from "./api/axios-init2"
import {Divider} from 'vant'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { Swipe, SwipeItem,Lazyload } from 'vant';
import { Sidebar, SidebarItem,Cell, CellGroup,NavBar,Tabbar,TabbarItem,Form,Field,Button} from 'vant';
import {Toast,Icon,RadioGroup, Radio,Popup} from 'vant'
import {Picker,DatetimePicker, Tab, Tabs,SwipeCell,Search,Grid,GridItem,List, PullRefresh } from 'vant'
import _ from 'loadsh'

Vue.prototype._=_
// import VueResource from 'vue-resource'
// Vue.use(VueResource);


Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Form)
Vue.use(Field)
Vue.use(Button)
Vue.use(Toast)
Vue.use(Icon)
//配置axios全局使用
// window.axios=axiosInit
Vue.prototype.$http = axiosInit//全局注册，使用方法为:this.$axios
Vue.prototype.$http2= axiosInit2
Vue.prototype.axios=axios

Vue.use(Picker)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(NavBar)

Vue.use(Sidebar)
Vue.use(SidebarItem)
//引入vant定制主题样式
// import 'vant/lib/index.less'
import 'vant/lib/divider/style/less'
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload)

Vue.use(BootstrapVue)
Vue.use(Divider)
Vue.use(Popup)
Vue.use(DatetimePicker)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(SwipeCell)
Vue.use(Search)
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(List)
Vue.use(PullRefresh)

// import MintUi from 'mint-ui'
// import 'mint-ui/lib/style.css'

// Vue.use(MintUi)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
