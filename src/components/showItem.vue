<template>
    <div class="itemCard">
        <div class="top">
            <span class="user">{{user}}</span>
            <br/>
            <span class="time">{{time}}</span>
            <van-icon class="icon" name="like-o" size="25" />
        </div>
        <div class="middle">
            <!-- <span class="title">{{title}}</span> -->
            {{title}}
        </div>
        <div class="clear"></div>
        <div class="bottom" @click="childClick">
            <span class="content van-multi-ellipsis--l2">{{content}}</span>
            <img src="https://img01.yzcdn.cn/vant/ipad.jpeg" alt="image" class="image">
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            imageSrc:'',
            id:this.articleID
        }
    },
    props:{
        user:{
            type:String,
            default:''
        },
        title: {
            type:String,
            default:''
        },
        time:{
            type:String,
            default:''
        },
        content:{
            type:String,
            default:''
        },
        articleID:{
            type:String,
            default:''
        },

    },
    methods:{
        childClick(){
            this.$emit('articleClick',this.id);
        }
    }
}
</script>
<style scoped>
.itemCard{
    border-top: 0.5px solid rgb(211, 210, 210);
    border-radius: 4px;
    padding-left: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
    height: auto;
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
    padding-top: 5px;
    padding-right: 15px;
    /* padding-left: 5px; */
    font-size: 16px;
    font-family: "Microsoft YaHei";
}
.bottom{
    height: 60px;
    position: relative;
}
.top .user{
    position: absolute;
    top: 3px;
    left: 8px;
    font-size: 15px;
}
.top .time{
    position: absolute;
    top: 25px;
    left: 8px;
    font-size: 13px;
    color: darkgrey;
}
.top .icon{
    position: absolute;
    top: 10px;
    right: 10px;
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