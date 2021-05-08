import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
    state:{
        Authorization:localStorage.getItem('Authorization')?localStorage.getItem('Authorization') : ''
    },
    mutations:{
        changeLogin(state,userToken){
            state.Authorization=userToken;
            localStorage.setItem('Authorization',userToken);
            // localStorage.setItem('MobilePhoe',MobilePhone);
        }
    },
    actions:{
        cLogin({commit},obj){
            commit('changeLogin',obj)
        }
    }
});
export default store;