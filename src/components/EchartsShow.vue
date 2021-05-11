<template>
    <div id="myCharts" ref="myCharts" style="width: 350px;height:350px;"></div>
</template>
<script>
const echarts = require('echarts');
export default{
    data(){
        return{
            MobilePhone:window.localStorage.getItem("MobilePhone"),
            dataset:[],
            nData:[],
            keys:[]
        }
    },
    computed:{
        
    },
    methods:{
        echartInit(){
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(this.$refs.myCharts);//document.getElementById("myChart")
            // 指定图表的配置项和数据
            var option = {
                title: {
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    top:15,
                    data:['收缩压','舒张压','心率']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '15%',
                    containLabel: true
                },
                dataset:{
                    dimensions:this.keys,
                    source:this.nData
                    
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                },
                yAxis: {
                    type: 'value'
                },
                dataZoom:[
                    {
                        type:'inside',
                        start:10,
                        end:60
                    },
                    {
                        type:'slider',
                        height:20
                    }
                ],
                series:[
                    {type:'line'},
                    {type:'line'},
                    {type:'line'}
                ]
                    
            
            }   
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        },
        onRequest(){
            const _this=this
            this.$http({
                method:'post',
                url:'gout/api/bld/all',
                data:{
                    phone: this.MobilePhone,
                }
            })
            .then(res=>{
                console.log(res.data.data)
                _.forEachRight(res.data.data,(value, index) => {
                    console.log(value)
                    _this.nData.push({
                        'CheckTime':value.CheckTime?value.CheckTime.substring(5,13):null,
                        '收缩压':value.BloodPressure1,
                        '舒张压':value.BloodPressure2,
                        '心率':value.HeartRate,                     
                    })
                });
                console.log(_this.nData)
                _this.keys = _.keys(_this.nData[0])
                this.echartInit()
            })
            .catch(error=>{
                console.log(error)
            })
        },
    },
    created(){
        this.onRequest()
    },
    mounted(){
       
    }
}
</script>
