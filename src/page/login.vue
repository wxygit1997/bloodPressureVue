<template>
    <div>
        <van-nav-bar
        title="登录"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        />
        <van-tabs type="card" color="#224b8f">
        <van-tab title="患者登录">
            <van-form @submit="onSubmitPat">
                <van-field
                    v-model="username"
                    name="用户名"
                    label="用户名"
                    placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]"
                />
                <van-field
                    v-model="password"
                    type="password"
                    name="密码"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
                />
                <div style="margin: 16px;">
                    <van-button round block type="info" native-type="submit">提交</van-button>
                </div>
            </van-form>
        </van-tab>
        <van-tab title="医生登录">
            <van-form @submit="onSubmitDoc">
                <van-field
                    v-model="username"
                    name="用户名"
                    label="用户名"
                    placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]"
                />
                <van-field
                    v-model="password"
                    type="password"
                    name="密码"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
                />
                <div style="margin: 16px;">
                    <van-button round block type="info" native-type="submit">提交</van-button>
                </div>
            </van-form>
        </van-tab>
        </van-tabs>
        
    </div>
</template>
<script>
import jsSHA from 'jssha'
import md5 from 'js-md5'
import {mapMutations} from 'vuex'
export default {
    data(){
        return{
            username:'',
            password:'',
        }
        
    },
    methods:{
        ...mapMutations(['changeLogin']),
        setPw(){
            // let sha256 = require("js-sha256").sha256//这里用的是require方法，所以没用import
            // let Base64= require("js-base64").Base64
            // this.pw=Base64.encode(sha256(this.passWord))
            const shaObj=new jsSHA("SHA-256","TEXT")
            shaObj.update(this.password)
            this.pw=shaObj.getHash("B64")
            console.log(this.pw)
            return this.pw
        },
        setPwPat(){
            return md5(this.password).toString();
        },
        onSubmitDoc(){
            let _this=this;
            this.$http({
                method:'post',
                // url:'http://117.78.27.3:8080/wxServer/jfc/login_md_ip',
                url:'https://www.goutip.cn/jfc/login_md_ip',
                data:{
                    comeFrom:"vu",
                    // wx_openid: user.openid,
                    wx_mobile: this.username,
                    ip_pwd: this.setPw(), 
                    ip_pwd_md5:this.setPwPat(),
                    is_patient: false,
                }
            })
            .then(res=>{
                console.log(res);
                _this.MobilePhone=res.data.data.Tel;
                window.localStorage.setItem('MobilePhone',_this.MobilePhone);
                console.log(res.data.data.DoctorName)
                window.localStorage.setItem('DoctorName',res.data.data.DoctorName);
                window.localStorage.setItem('DoctorSex',res.data.data.Sex);
                // window.localStorage.setItem('doctorName',res.data.data.);
                // console.log('jwt '+res.data.data.Token);
                _this.userToken = 'jwt '+res.data.data.jwt;
                // 将用户token保存到vuex中
                _this.$store.dispatch('cLogin',_this.userToken);
                _this.$store.commit('addState',_this.isPat);
                _this.$toast.success('登录成功');
                this.$router.push({path:'/doctorlogged'})
            })
            .catch(error=>{
                alert('账号或密码错误');
                console.log(error);
            })
        },
        onSubmitPat(){
            let _this=this;
            this.$http({
                method:'post',
                //正式库的测试版
                // url:'http://117.78.27.3:8080/gout2.0.hw4.stable/gout/login',
                //正式库
                // url:'https://www.goutmd.com/gout2.0.hw.yun/gout/login',
                // url:'http://117.78.27.3:8080/wxServer/jfc/login_md_ip',
                url:'https://www.goutip.cn/jfc/login_md_ip',
                data:{
                    comeFrom:"vu",
                    // wx_openid: user.openid,
                    wx_mobile: this.username,
                    ip_pwd: this.setPwPat(), 
                    is_patient: true,
                }
            })
            .then(res=>{
                console.log(res);
                _this.MobilePhone=res.data.data.MobilePhone;
                window.localStorage.setItem('MobilePhone',_this.MobilePhone);
                _this.userToken = 'jwt '+res.data.data.jwt;
                // 将用户token保存到vuex中
                _this.$store.dispatch('cLogin',_this.userToken);
                _this.$toast.success('登录成功');
                this.$router.push({path:'/homeuserlogged'})
            })
            .catch(error=>{
                alert('账号或密码错误');
                console.log(error);
            })
        },
        onClickLeft(){
            this.$router.push({path:'/homeuserlogged'})
        }
    }
  
}
</script>
