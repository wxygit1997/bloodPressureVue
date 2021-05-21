<template>
    <div>
        <van-nav-bar
        title="病历"
        />
        <div>病历</div>
        <FooterNav v-bind:active="active" style="position:fixed;bottom:0px;"/>
    </div>
</template>
<script>
import FooterNav from "../components/FooterNav.vue";
export default{
    data(){
        return{
            active:1
        }
    },
    components:{
        FooterNav,
    },
}
</script>
