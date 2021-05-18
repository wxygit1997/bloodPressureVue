import axios from 'axios'  //引入axios
import store from '@/store/index'  //引入store
import router from '@/router'  //引入router


// axios.defaults.crossDomain=true
// axios.defaults.withCredentials=true
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
const axiosInit2 = axios.create({
    baseURL:'http://117.78.27.3:8080/wxServer',
    timeout:5000,
    headers: {
        'Content-Type': 'application/json',
    }
})
axiosInit2.interceptors.request.use(
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
axiosInit2.interceptors.response.use(
    response => {
        //拦截响应，做统一处理 
        if(response.status==200)
            return Promise.resolve(response);
    },
    //接口错误状态处理，也就是说无响应时的处理
    error => {
        console.log(error.response)
    }
)


export default axiosInit2


