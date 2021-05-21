<template>
    <div>
        <van-nav-bar
        title="文章详情"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        />
        <div class="title">{{title}}</div>
        <div class="publishdate">{{publishdate}}</div>
        <div class="content" v-html="content"></div>
    </div>
</template>
<script>
export default
{
    data(){
        return{
            id:this.$route.query.id,
            title:'',
            publishdate:'',
            content:""
        }
    },
    methods:{
        onClickLeft(){
            this.$router.push({path:'/'})
        },
        getTime(origiTime){
            var time=new Date(origiTime);
            return time.getFullYear() + "-" + (time.getMonth() + 1) + "-" + time.getDate()+' '+ time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
        },
    },
    created(){
        this.$http2({
            method:'post',
            // url:'http://117.78.27.3:8080/wxServer/ip/single.api',
            // url:'ip/single.api',
            url:'jfc/news/single',
            data:{
                id:this.id,
                
            }
        })
        .then(res=>{
            // console.log(res.data.data)
            const _this=this
            this.title=res.data.data.Title
            var originTime=res.data.data.PublishDate
            this.publishdate=_this.getTime(originTime)
            this.content=res.data.data.Content.replace("line-height: 150%;","line-height: 100%;")
        })
        .catch(err=>{
            console.log(err)
        })
    },
}
</script>
<style scoped>
.title{
    font-size: 20px;
    height: 50px;
    line-height: 50px;
    padding-left: 15px;
}
.publishdate{
    margin-top: 10px;
    font-size: 15px;
    color: darkgray;
    padding-left: 15px;
}
.content{
    width: 95%;
    margin: 0 auto;
    line-height: 120% !important;
}
</style>