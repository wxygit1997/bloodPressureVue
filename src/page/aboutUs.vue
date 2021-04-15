<template>
    <div>
        <div class="group">
            <div class="title">
                <van-divider content-position="left">团队介绍</van-divider>
            </div>
            <div class="card">
                <b-card
                    bg-vatiant="light"
                    img-src="../assets/anyi.png"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-1"
                >
                    <p class="leader-name">安毅 教授</p>
                    <b-card-text class="text">
                    青岛大学附属医院心血管内科主任、主任医师，青岛市政府特殊津贴专家，中华医学会山东省心血管病学“杰出介入专家”。
                    </b-card-text>
                </b-card>
                <b-card
                    bg-vatiant="light"
                    img-src="../assets/wangfeiyue.png"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-1"
                >
                    <p class="leader-name">王飞跃 教授</p>
                    <b-card-text class="text">
                    控制领域的领军学者、早期开拓者和研究者之一，国家引入海外杰出人才计划、中国科学院百人计划、国防领域国家千人计划特聘专家。
                    </b-card-text>
                </b-card>
                <b-card
                    bg-vatiant="light"
                    img-src="../assets/gaoyanchen.png"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-1"
                >
                    <p class="leader-name">高彦臣 教授</p>
                    <b-card-text class="text">
                    商业实战专家，万龙科技集团董事长，软控荣誉总裁，泰山产业领军人才、山东省突出贡献专家、软件企业领军人员。
                    </b-card-text>
                </b-card>
                 
            </div>
        </div>
        <div class="company">
            <div class="title">
                <van-divider content-position="left">合作企业</van-divider>
            </div>
            <van-swipe :autoplay="3000" width="808px" height="235px">
                <van-swipe-item>
                    <img src="../assets/company1.png" alt="img1">
                    <!-- <img v-lazy="image" /> -->
                </van-swipe-item>
                <!-- <van-swipe-item>
                    <img src="../assets/company2.png" alt="img2">
                </van-swipe-item> -->
                <van-swipe-item>
                    <img src="../assets/company3.png" alt="img3">
                </van-swipe-item>
            </van-swipe>
        </div>
    </div>
</template>


<style  scoped>
    .title{
        font-size: 30px;
    }
    .group{
        width: 90%;
        text-align: center;
        margin: 0 auto;
    }
    .text{
        font-size: 15px;
    }
    .card-body{
        padding: 10px;
    }
    .leader-name{
        font-size: 20px;
        font-family: "微软雅黑";
        margin: 0px auto;
    }
    
    
</style>