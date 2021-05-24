<template>
    <div>
        <div v-if="isshow">
            <div class="allCard" v-for="(item,key) in DataList" :key="key" >
                <div class="date">
                    {{key}}
                </div>  
                <div v-for="(item_detail,key_detail) in item" :key="key_detail">
                    <!-- {{item_detail}} -->
                    <historyRecordCard 
                    :testTime="item_detail.CheckTime?item_detail.CheckTime.substring(11,16):null"
                    :highPressure="item_detail.BloodPressure1"
                    :lowPressure="item_detail.BloodPressure2"
                    :pressureLevel="item_detail.BldLevel"
                    :ID="item_detail.ID"
                    /> 
                </div>
            </div>
        </div>
        <div v-else>
            <van-empty image="error" description="无内容" />
        </div>
    </div>
</template>
<script>
import historyRecordCard from "../components/HistoryRecordCard.vue";
export default {
    data(){
        return{
            DataList:'',
            // isshow:this.DataList.length==0?false:true,
            isshow:true,
            date:'04-29',
            testTime:'09:22',
            highPressure:'12',
            lowPressure:'323',
            pressureLevel:'轻度',
            MobilePhone:window.localStorage.getItem("MobilePhone"),
        }
    },
    components:{
        historyRecordCard,
    },
    methods:{
        showData(){
            console.log("data",this.DataList)
        },
        onRequest(){
            this.$http({
                method:'post',
                url:'gout/api/bld/all',
                data:{
                    phone: this.MobilePhone,
                    // patientType: that.data.elitePatientType_value,
                    // DataList:[]
                }
            })
            .then(res=>{
                // console.log(res.data.data)
                var DataList=res.data.data
                this.isshow = DataList.length==0?false:true
                var newDataList = _.groupBy(DataList,function(obj){
                    if(obj.CheckTime)
                        return obj.CheckTime.substring(0,10)
                    else
                        return ''
                })
                console.log("newdatalist",newDataList)
                this.DataList=newDataList
            })
            .catch(error=>{
                console.log(error)
            })
        }
    },
    created(){
        
    },
    mounted(){
        this.onRequest()
        // console.log("data",this.DataList)
    }
}
</script>
<style scoped>
.date{
    font-size: 15px;
    color: rgb(102, 102, 102);
    padding-left: 20px;
    padding-top: 5px;
    margin-bottom: 0px;
    background-color: rgb(247, 245, 245);
}
.allCard{
    background-color: rgb(247, 245, 245);
}
</style>