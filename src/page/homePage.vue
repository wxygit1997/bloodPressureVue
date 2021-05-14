<template>
    <div>
       <van-nav-bar
        title="工具"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        />
        <van-search v-model="value" placeholder="请输入搜索关键词" />
        <van-grid>
            <van-grid-item v-for="(item,i) in gridList" 
                :key="i" 
                :icon="item.photo" 
                :text="item.text" 
            >
            </van-grid-item>
        </van-grid>
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh" success-text="刷新成功">
            <van-list v-model="loading" :finished="finished" finished-text="没有更多啦" @load="loadMore" class="publist">
                <div v-for="(item,index) in dataList" :key="index">
                    <Item :title="item.Title" 
                        :user="item.author"
                        :time="item.Time"
                        :content="item.text"
                    />
                </div>
            </van-list>
        </van-pull-refresh>
        
        
        <FooterNav v-bind:active="active" style="position:fixed;bottom:0px;"/>
    </div>
</template>
<script>
import FooterNav from "../components/FooterNav.vue";
import Item from "../components/showItem.vue";
export default{ 
    data(){
        return{
            active:0,
            value:'',
            imageUrl:require("../assets/zhineng.png"),
            gridList:[
                {
                    text:'药品速查',
                    photo:require('../assets/pills.png')
                },
                {
                    text:'问医生',//查疾病
                    photo:require('../assets/doctor.png')
                },
                {
                    text:'查疾病',//查疾病
                    photo:require('@/assets/medical.png')
                },
                {
                    text:'自诊',//查疾病
                    photo:require('@/assets/zizhen.png')
                },
            ],
            dataList:[],
            loading:false,
            finished:false,
            page:1,
            refreshing:false,
        }
    },
    components:{
        FooterNav,
        Item
    },
    methods:{
        onClickLeft(){
            alert('返回');
        },
        getTime(origiTime){
            var time=new Date(origiTime);
            return time.getFullYear() + "-" + (time.getMonth() + 1) + "-" + time.getDate()+' '+ time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
        },
        loadMore(){
            this.page+=1;
            this.onLoad();
        },
        onLoad(){
            this.$http2({
                    method:'post',
                    url:'getAuditoriumList.do',
                    data:{
                        DeviceType: 3,
                        PageCount: this.page,
                        PageRowCount: 10
                    }
                })
                .then(res=>{
                    this.loading=false;
                    const _this=this;
                    var appendList=res.data.data.GetAuditoriumList.map(function(item){
                        return{
                            Title:item.Title,
                            Time:_this.getTime(item.publishdate),
                            author:item.author,
                            text:item.sub
                        }
                    })
                    this.dataList=this.dataList.concat(appendList);
                    if(res.data.data.GetAuditoriumList.length<10){
                        this.finished=true;
                    }else{
                        this.finished=false;
                    }
                })
                .catch(error=>{
                    console.log(error)
                }
            )
        },
        onRefresh(){
            if(this.refreshing){
                this.dataList=[]
                this.refreshing=false
                this.page=1
                this.onLoad();
            }
        }
    },
    created(){
        const _this=this
        this.$http2({
                method:'post',
                url:'getAuditoriumList.do',
                data:{
                    DeviceType: 3,
                    PageCount: 1,
                    PageRowCount: 10
                }
            })
            .then(res=>{
                console.log(res.data)
                // console.log(res.data.data.GetAuditoriumList[0].Title)
                _this.dataList=res.data.data.GetAuditoriumList.map(function(item){
                    return{
                        Title:item.Title,
                        Time:_this.getTime(item.publishdate),
                        author:item.author,
                        text:item.sub
                    }
                })
                console.log(_this.dataList)

            })
            .catch(error=>{
                console.log(error)
            }
        )
    }
}
</script>