<template>
    <div class="detail-page">
        <div class="header">
            <img class="logo-img" src="../assets/logo_gaoxin.jpg" >
        </div>
        <van-sidebar v-model="activeKey">
            <van-sidebar-item title="标签名称" />
            <van-sidebar-item title="标签名称" />
            <van-sidebar-item title="标签名称" />
        </van-sidebar>
    </div>
</template>

<style scoped>
    .header{
        width: 100%;
        height: 50px;
        background-color: cadetblue;
    }
    .logo-img{
        display: inline-block;
        height: 50px;
        position: fixed;
        top: 0px;
        left: 0px;
    }
    
</style>
<script>
export default {
  data() {
    return {
      activeKey: 0,
    };
  },
};
</script>
