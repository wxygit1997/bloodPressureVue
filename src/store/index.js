import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
    state:{
        Authorization:localStorage.getItem('Authorization')?localStorage.getItem('Authorization') : '',
        isPatient:localStorage.getItem('isPatient')?localStorage.getItem('Authorization') : true,
    },
    mutations:{
        changeLogin(state,userToken){
            state.Authorization=userToken;
            localStorage.setItem('Authorization',userToken);
            // localStorage.setItem('MobilePhoe',MobilePhone);
        },
        addState(state,isPat){
            state.isPatient=isPat;
            localStorage.setItem('isPatient',isPat);
        }
    },
    actions:{
        cLogin({commit},obj){
            commit('changeLogin',obj)
        }
    }
});
export default store;