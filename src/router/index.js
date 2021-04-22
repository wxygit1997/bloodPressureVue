import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/page/home'
import AboutUs from '@/page/aboutUs'
import HomeUser from '@/page/home_user'
import HomePage from '@/page/homePage'
import Login from '@/page/login'
import Test from '@/page/test'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/aboutus',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/homeuser',
      name: 'HomeUser',
      component: HomeUser
    },
    {
      path: '/homepage',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
//导航守卫
router.beforeEach((to,from,next)=>{
  if(to.path==='/login'){
    next()
  }else{
    let token=localStorage.getItem('Authorization');
    if(token==='null'||token===''){
      next('/login')
    }else{
      next()
    }
  }
})
export default router;
