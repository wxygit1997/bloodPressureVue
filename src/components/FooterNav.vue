<template>
        <van-tabbar v-model="active"  @change="onChange" style="position: absolute;
        bottom: 0px;">
            <van-tabbar-item url="/homepage" icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item icon="notes-o">病例</van-tabbar-item>
            <van-tabbar-item icon="apps-o">工具</van-tabbar-item>
            <van-tabbar-item icon="user-o">我的</van-tabbar-item>
        </van-tabbar>
</template>
<script>
export default {
    
    data(){
        return{
            active:3
        }
    },
    methods:{
        onChange(index){
            const routerArray=[
                "/homepage",
                "/homeuser",
                "/homeuser",
                "/homeuser"
            ];
            this.$router.push(routerArray[index])
        }
    }
}
</script>