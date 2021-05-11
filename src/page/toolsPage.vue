<template>
    <div>
        <van-nav-bar
        title="工具"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        />
        
        <!-- <div class="top" @click="toUserInformation">
            <van-icon class="user_icon" name="manager" size="60" />
        </div> -->
        <div class="cell-group">
            <van-cell v-for="item in toolsList" :key="item.title" :title="item.title" is-link :to="item.url">
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
            // active:2,
            toolsList : [
            { title: "输入血压", url: "bloodpressure" },
            { title: "查看血压", url: "showbloodpressure" },
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
        toUserInformation(){
            this.$toast('请先登录');
            // this.$router.push({path:'/userinformation'})
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