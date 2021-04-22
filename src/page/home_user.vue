<template>
    <div>
        <van-nav-bar
        title="我的"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        />
        
        <div class="top">
            <van-icon class="user_icon" name="manager" size="60" @click="toLogin" />
        </div>
        <div class="cell-group">
            <van-cell v-for="item in unloggeduserCenterList" :key="item.title" :title="item.title" is-link :to="item.url">
            </van-cell>
        </div>
        <FooterNav />
    </div>
</template>
<script>
import FooterNav from "../components/FooterNav.vue";
export default{ 
    data(){
        return{
            active:3,
            unloggeduserCenterList : [
            { title: "登录", url: "login" },
            { title: "注册", url: "#" },
            { title: "医生注册", url: "#" },
            { title: "关于我们", url: "aboutus" },
            { title: "清除缓存", url: "#" }
            ],
        }
    },
    components:{
        FooterNav
    },
    methods:{
        onClickLeft(){
            alert('返回');
        },
        toLogin(){
            this.$router.push({path:'/login'})
        }
    }
}
</script>

<style scoped>
.top{
    widows: 100%;
    height: 200px;
    background-color: cadetblue;
    font-size: 20px;
    position: relative;
}
.user_icon{
    position: absolute;
    bottom:30px;
    left: 20px;
}
</style>