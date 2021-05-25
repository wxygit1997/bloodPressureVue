<template>
    <div>
        <van-swipe-cell class="swipe-cell">
            <div class="card">
                <div class="time">
                    {{testTime}}
                </div>
                <div class="valueDisplay">
                    <span class="title">血压<br/>mmHg</span>
                    <span class="value">{{highPressure}} / {{lowPressure}}</span>
                </div>
                <div class="level">
                    {{pressureLevel}}
                </div>
            </div>
            <template #right class="right" v-if="isSwipe">
                <van-button square text="删除" type="danger" class="delete-button" @click="deleteInfo" />
                <van-button square text="修改" type="primary" class="delete-button" @click="changeInfo" />
            </template>
            <template #right v-else></template>

        </van-swipe-cell>
    </div>
</template>
<script>
export default{
    inject:['reload'],
    data(){
        return{
            isSwipe:this.ID==null?false:true
        }
        
    },
    props:{
        testTime:String,
        highPressure:"",
        lowPressure:"",
        pressureLevel:"",
        ID:"",
        weight:"",
    },
    methods:{
        deleteInfo(){
            const _this=this
            _this.$http({
                method:'post',
                url:'gout/api/bld/del',
                data:{
                    ID: this.ID,
                }
            })
            .then(res=>{
                console.log(res.data.data)
                _this.reload()
                //刷新页面
            })
            .catch(error=>{
                console.log(error)
            })
        },
        changeInfo(){
            this.$router.push({
                path:'/bloodpressure',
                query:{
                    ID:this.ID,
                    highPressure:this.highPressure,
                    lowPressure:this.lowPressure,
                    weight:this.weight,
                }
            });
        }
    }
}
</script>
<style scoped>
.card{
    width: 95%;
    height: 50px;
    background-color: white;
    box-shadow: 0 2px 4px 0 rgba(159, 186, 245, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 4px;
    margin: 0  auto;
    margin-top: 5px;
    position: relative;
}
.time{
    font-size: 15px;
    color: darkgray;
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translate(0%, -50%);
}
.valueDisplay .title{
    font-size: 13px;
    color: darkgray;
    position: absolute;
    left: 70px;
    top: 50%;
    transform: translate(0%, -50%);
    font-family: initial;
}
.valueDisplay .value{
    font-size: 20px;
    position: absolute;
    left:120px;
    top: 50%;
    transform: translate(0%, -50%);
}
.level{
    font-size: 17px;
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translate(0%, -50%);
    color: rgb(165, 7, 54);
}
.right{
    position: relative;
}
.delete-button{
    /* position: absolute; */
    float: right;
    height: 100%;
}
</style>
