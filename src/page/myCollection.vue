<template>
    <div>
        <van-nav-bar title="我的收藏" left-text="返回" left-arrow @click-left="onClickLeft" />
        <van-cell-group>
            <van-cell center title="单元格" value="内容" label="描述信息" />
        </van-cell-group>
    </div>
</template>
<script>
export default{
    data(){
        return{
            collectList:[]
        }
    },
    methods:{
        onClickLeft(){
            this.$router.push({path:'/'});
        },
    },
    created(){
        let token=localStorage.getItem('Authorization');
        if(token==='null'||token===''){
            this.$toast('请先登录');
        }else{
            this.$http2({
                method:'get',
                url:'jfc/collectdrug/all'
            })
            .then(res=>{
                console.log(res)
            })
            .catch(error=>{
                console.log(error)
            }
        )
        }
    }
}
</script>
