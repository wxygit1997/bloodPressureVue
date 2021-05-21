<template>
    <div>
        <van-nav-bar
        title="我的"
        />
        
        <div class="top" @click="toUserInformation">
            <van-icon class="user_icon" name="manager" size="60" />
        </div>
        <div class="cell-group">
            <van-cell v-for="item in unloggeduserCenterList" :key="item.title" :title="item.title" is-link :to="item.url">
            </van-cell>
            <van-cell title="注销" @click="clearStorage"></van-cell>
        </div>
        <FooterNav v-bind:active="active" />
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
            ],
        }
    },
    components:{
        FooterNav
    },
    methods:{
        toLogin(){
            this.$router.push({path:'/login'})
        },
        toUserInformation(){
            this.$toast('请先登录');
            // this.$router.push({path:'/userinformation'})
        },
        clearStorage(){
            localStorage.clear();
            this.$toast("注销成功");
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