import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/page/home'
import AboutUs from '@/page/aboutUs'
import HomeUser from '@/page/home_user'
import HomePage from '@/page/homePage'
import Login from '@/page/login'
import Test from '@/page/test'
import UserInformation from '@/page/userInformation'
import HomeUserLogged from '@/page/homeUserLogged'
import BloodPressure from '@/page/bloodPressure'
import ShowBloodPressure from '@/page/showBloodPressure'
import DailyRecord from '@/components/dailyRecord'
import ToolsPage from '@/page/toolsPage'
import ArticleDetail from '@/page/articleDetail'
import RecordPage from '@/page/recordpage'
import MyCollection from '@/page/myCollection'
import DoctorLogged from '@/page/DoctorLogged'
import UserInformationDoc from '@/page/userInformationDoc'


Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
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
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/userinformation',
      name: 'UserInformation',
      component: UserInformation
    },
    {
      path: '/homeuserlogged',
      name: 'HomeUserLogged',
      component: HomeUserLogged
    },
    {
      path: '/bloodpressure',
      name: 'BloodPressure',
      component: BloodPressure
    },
    {
      path: '/showbloodpressure',
      name: 'ShowBloodPressure',
      component: ShowBloodPressure
    },
    {
      path: '/dailyrecord',
      name: 'DailyRecord',
      component: DailyRecord
    },
    {
      path: '/toolspage',
      name: 'ToolsPage',
      component: ToolsPage
    },
    {
      path: '/articledetail',
      name: 'ArticleDetail',
      component: ArticleDetail
    },
    {
      path: '/recordpage',
      name: 'RecordPage',
      component:RecordPage
    },
    {
      path: '/mycollection',
      name: 'MyCollection',
      component:MyCollection
    },
    {
      path: '/doctorlogged',
      name: 'DoctorLogged',
      component:DoctorLogged
    },
    {
      
      path: '/userinformationdoc',
      name: 'UserInformationDoc',
      component:UserInformationDoc
    }
  ]
})
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
//????????????
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
