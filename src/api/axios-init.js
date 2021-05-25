import axios from 'axios'  //引入axios
//下面这两个不一定需要引入，看你项目需要拦截的时候做什么操作，但是一般都需要引入store
import store from '@/store/index'  //引入store
import router from '@/router'  //引入router

// 添加请求拦截器，在请求头中加token

const axiosInit = axios.create({
    //测试的
    // baseURL:'http://117.78.27.3:8080/gout2.0.hw4.stable/',
    //正式的
    baseURL:'https://www.goutmd.com/gout2.0.hw.yun',
    timeout:5000
})
axiosInit.interceptors.request.use(
    (config) => {
        if (localStorage.getItem('Authorization')) {
            config.headers.Authorization = localStorage.getItem('Authorization');
        }
        return config;
    },
    error => {
        console.log(error)
        //return Promise.reject(error)
})
axiosInit.interceptors.response.use(
    response => {
        //拦截响应，做统一处理 
        if(response.status==200)
            return Promise.resolve(response);
    },
    //接口错误状态处理，也就是说无响应时的处理
    error => {
        // console.log(error.response.status)
        console.log('error!')
        const response = {'data': {'code': -1}}
        return response
    }
)


export default axiosInit

// axios.interceptors.response.use(
//     response => {
//         //拦截响应，做统一处理 
//         if(response.status===200){
//             return Promise.resolve(response);
//         }else{
//             return Promise.reject(response);
//         }
//     },
//     //接口错误状态处理，也就是说无响应时的处理
//     error => {
//         if(error.response.status){
//             switch(error.response.status){
//                 case 401:
//                     localStorage.removeItem('Authorization');
//                     this.$router.push('/login');
//                 default:
//                     vant.Toast.fail(error.response.data.message);
//             }
//             return Promise.reject(error.response)
//         }
//     }
// )

