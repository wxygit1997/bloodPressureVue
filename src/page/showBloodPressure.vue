<template>
    <div>
        <van-nav-bar
            title="历史血压记录"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
        <div class="showRecentBlood">
            <van-cell center title="收缩压" 
            :value="BloodPressure1" 
            label="毫米汞柱" />
            <van-cell center title="舒张压" 
            :value="BloodPressure2" 
            label="毫米汞柱" />
            <van-cell center title="脉搏" 
            :value="HeartRate" 
            label="次/分" />
            <van-cell center title="体重" 
            value="内容" 
            label="kg" />
        </div>
        
        <div class="historyRecord">
            <van-tabs v-model="activeName">
            <van-tab title="历史记录" name="a">
                <div>
                    <historyRecord/>
                </div>
            </van-tab>
            <van-tab title="趋势" name="b">
                <echart />
                <!-- <div id="myCharts" ref="myCharts" style="width: 200px;height:200px;"></div> -->
            </van-tab>
                
            </van-tabs>
        </div>
    </div>
</template>

<script>
import historyRecord from "../components/dailyRecord.vue";
import echart from "../components/EchartsShow";
export default{
    data(){
        return{
            MobilePhone:window.localStorage.getItem("MobilePhone"),
            activeName: 'a',
            testTime:'09:22',
            maxId:'',
            BloodPressure1:'',
            BloodPressure2:'',
            HeartRate:'',
            DataList:[],
        }
    },
    components:{
        historyRecord,
        echart
    },
    methods:{
        onClickLeft(){
            console.log('暂不返回')

        },
        getTargetObjById(arr,id){
            return arr.find(item=>item.id===id)
        },
        groupBy( array , f ) {
            let groups = {};
            array.forEach( function( o ) {
                let group = JSON.stringify( f(o) );
                groups[group] = groups[group] || [];
                groups[group].push( o );
            });
            return Object.keys(groups).map( function( group ) {
                return groups[group];
            });
        },
        isEmpty(obj){
            if(typeof obj == "undefined" || obj == null || obj == ""){
                return true;
            }else{
                return false;
            }
        }
    },
    created(){
        this.$http({
                method:'post',
                url:'gout/api/bld/all',
                data:{
                    phone: this.MobilePhone,
                    // patientType: that.data.elitePatientType_value,
                    DataList:[]
                }
            })
            .then(res=>{
                console.log(res.data.data)
                var DataList=res.data.data
                this.DataList=DataList
                console.log(this.DataList)
                //最近历史记录
                this.maxId=Math.max(...DataList.map(x=>x.ID))
                console.log(this.maxId)
                var maxId=this.maxId
                var obj=DataList.find(function (x) {
                    return x.ID === maxId
                })
                console.log(obj.CheckTime.substring(0,10))
                this.BloodPressure1=obj.BloodPressure1
                this.BloodPressure2=obj.BloodPressure2
                this.HeartRate=obj.HeartRate
            })
            .catch(error=>{
                console.log(error)
            }
        )
    },
    mounted(){
        
    }
}
</script>
<style  scoped>
.showRecentBlood{
    width: 95%;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 4px;
    margin: 0  auto;
}
.historyRecord{
    margin-top:20px;
}
</style>