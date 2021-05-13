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
            <van-grid-item v-for="(item,i) in gridList" :key="i" 
                :icon="item.photo" 
                :text="item.text" 
            >
            </van-grid-item>
        </van-grid>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
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
            ]
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
    }
}
</script>