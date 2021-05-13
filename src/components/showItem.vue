<template>
    <div class="itemCard">
        <div class="top">
            <span class="user">{{user}}</span>
            <br/>
            <span class="time">{{time}}</span>
            <van-icon class="icon" name="like-o" size="25" />
        </div>
        <div class="middle">
            <span class="title">{{title}}</span>
        </div>
        <div class="bottom">
            <span class="content van-multi-ellipsis--l2">{{content}}</span>
            <img src="https://img01.yzcdn.cn/vant/ipad.jpeg" alt="image" class="image">
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            user:'Alex Lyu',
            time:'2021-5-11',
            title:'别靠不吃主食减肥了！',
            content:'今天这篇文章给大家介绍一个简单的动作，这个动作不仅平时有用，对于....',
            imageSrc:''
            }
    },
    props:{
        
    },
}
</script>
<style scoped>
.itemCard{
    border-top: 0.5px solid rgb(211, 210, 210);
    /* border-bottom: 1px solid rgb(160, 159, 159); */
    /* height: 400px; */
    border-radius: 4px;
    padding-left: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
}
.top{
    height: 50px;
    position: relative;
    border-left:3px solid rgb(248, 221, 252);
}
.middle{
    height: auto;
    min-height: 30px;
    position: relative;
}
.bottom{
    height: 60px;
    position: relative;
}
.top .user{
    position: absolute;
    top: 3px;
    left: 3px;
    font-size: 15px;
}
.top .time{
    position: absolute;
    top: 25px;
    left: 3px;
    font-size: 13px;
    color: darkgrey;
}
.top .icon{
    position: absolute;
    top: 10px;
    right: 10px;
}
.middle .title{
    position: absolute;
    top: 5px;
    font-size: 16px;
    font-family: "Microsoft YaHei";
}
.bottom .content{
    position: absolute;
    top: 5px;
    width: 60%;
    font-size: 13px;
    color: rgb(146, 145, 145);
    font-family:"SimHei","KaiTi";
}
.bottom .image{
    position: absolute;
    top: 5px;
    right: 0;
    width: 40%;
    height: 80%;
    /* border-radius: 4px; */
}
</style>