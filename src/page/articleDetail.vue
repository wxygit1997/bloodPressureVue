<template>
    <div>
        <van-nav-bar
        title="文章详情"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        />
        <div class="title">{{title}}</div>
        <div class="publishdate">{{publishdate}}</div>
        <div class="content" v-html="content"></div>
    </div>
</template>
<script>
export default
{
    data(){
        return{
            id:this.$route.query.id,
            title:'高血压治疗',
            publishdate:'2021-5-17',
            content:"<p class=\"MsoNormal\" style=\"text-indent:0.0000pt;mso-char-indent-count:0.0000;text-autospace:ideograph-numeric;mso-pagination:none;line-height:150%;\"><span style=\"mso-spacerun:'yes';font-family:宋体;mso-bidi-font-family:'Times New Roman';line-height:150%;font-size:12.0000pt;mso-font-kerning:1.0000pt;\">（</span><span style=\"mso-spacerun:'yes';font-family:宋体;mso-bidi-font-family:'Times New Roman';line-height:150%;font-size:12.0000pt;mso-font-kerning:1.0000pt;\">1</span><span style=\"mso-spacerun:'yes';font-family:宋体;mso-bidi-font-family:'Times New Roman';line-height:150%;font-size:12.0000pt;mso-font-kerning:1.0000pt;\">）秋水仙碱是治疗急性痛风性关节炎的传统药物，也是特效药物，但由于传统的服药方法，虽有明显的镇痛和消炎效果，但同时也有明显的腹泻、腹痛、骨髓抑制、肝肾损害等副作用。大多数痛风患者都知道痛风发作时，服用秋水仙碱有特效，但由于害怕秋水仙碱的副作用，特别是肝肾副作用，使许多患者宁肯忍受痛风之痛，也不愿接受秋水仙碱治疗，致使炎症不能及时控制，痛风由急性转为慢性。</span><span style=\"mso-spacerun:'yes';font-family:宋体;mso-bidi-font-family:'Times New Roman';line-height:150%;font-size:12.0000pt;mso-font-kerning:1.0000pt;\"><o:p></o:p></span></p><p class=\"MsoNormal\" style=\"text-indent:0.0000pt;mso-char-indent-count:0.0000;text-autospace:ideograph-numeric;mso-pagination:none;line-height:150%;\"><span style=\"mso-spacerun:'yes';font-family:宋体;mso-bidi-font-family:'Times New Roman';line-height:150%;font-size:12.0000pt;mso-font-kerning:1.0000pt;\">（</span><span style=\"mso-spacerun:'yes';font-family:宋体;mso-bidi-font-family:'Times New Roman';line-height:150%;font-size:12.0000pt;mso-font-kerning:1.0000pt;\">2</span><span style=\"mso-spacerun:'yes';font-family:宋体;mso-bidi-font-family:'Times New Roman';line-height:150%;font-size:12.0000pt;mso-font-kerning:1.0000pt;\">）众多资料显示秋水仙碱的副作用有明显的剂量依赖性。编者临床应用过程中也发现，每日秋水仙碱用量超过</span><span style=\"mso-spacerun:'yes';font-family:宋体;mso-bidi-font-family:'Times New Roman';line-height:150%;font-size:12.0000pt;mso-font-kerning:1.0000pt;\">6</span><span style=\"mso-spacerun:'yes';font-family:宋体;mso-bidi-font-family:'Times New Roman';line-height:150%;font-size:12.0000pt;mso-font-kerning:1.0000pt;\">片（</span><span style=\"mso-spacerun:'yes';font-family:宋体;mso-bidi-font-family:'Times New Roman';line-height:150%;font-size:12.0000pt;mso-font-kerning:1.0000pt;\">3</span><span style=\"mso-spacerun:'yes';font-family:宋体;mso-bidi-font-family:'Times New Roman';line-height:150%;font-size:12.0000pt;mso-font-kerning:1.0000pt;\">毫克）</span><span style=\"mso-spacerun:'yes';font-family:宋体;mso-bidi-font-family:'Times New Roman';line-height:150%;font-size:12.0000pt;mso-font-kerning:1.0000pt;\">,</span><span style=\"mso-spacerun:'yes';font-family:宋体;mso-bidi-font-family:'Times New Roman';line-height:150%;font-size:12.0000pt;mso-font-kerning:1.0000pt;\">一半以上的患者会出现腹泻，超过</span><span style=\"mso-spacerun:'yes';font-family:宋体;mso-bidi-font-family:'Times New Roman';line-height:150%;font-size:12.0000pt;mso-font-kerning:1.0000pt;\">8</span><span style=\"mso-spacerun:'yes';font-family:宋体;mso-bidi-font-family:'Times New Roman';line-height:150%;font-size:12.0000pt;mso-font-kerning:1.0000pt;\">片（</span><span style=\"mso-spacerun:'yes';font-family:宋体;mso-bidi-font-family:'Times New Roman';line-height:150%;font-size:12.0000pt;mso-font-kerning:1.0000pt;\">4</span><span style=\"mso-spacerun:'yes';font-family:宋体;mso-bidi-font-family:'Times New Roman';line-height:150%;font-size:12.0000pt;mso-font-kerning:1.0000pt;\">毫克），几乎所有患者均会出现腹痛、腹泻等副作用。但如果把秋水仙碱的量控制在</span><span style=\"mso-spacerun:'yes';font-family:宋体;mso-bidi-font-family:'Times New Roman';line-height:150%;font-size:12.0000pt;mso-font-kerning:1.0000pt;\">3</span><span style=\"mso-spacerun:'yes';font-family:宋体;mso-bidi-font-family:'Times New Roman';line-height:150%;font-size:12.0000pt;mso-font-kerning:1.0000pt;\">片（</span><span style=\"mso-spacerun:'yes';font-family:宋体;mso-bidi-font-family:'Times New Roman';line-height:150%;font-size:12.0000pt;mso-font-kerning:1.0000pt;\">1.5</span><span style=\"mso-spacerun:'yes';font-family:宋体;mso-bidi-font-family:'Times New Roman';line-height:150%;font-size:12.0000pt;mso-font-kerning:1.0000pt;\">毫克）以内，副作用出现率明显降低。因此痛风发作时，拒绝秋水仙</span><span style=\"mso-spacerun:'yes';font-family:宋体;mso-bidi-font-family:'Times New Roman';line-height:150%;color:rgb(0,0,0);font-size:12.0000pt;mso-font-kerning:1.0000pt;\">碱治疗是不明智的。但在使用时应尽量将剂量控制在每日</span><span style=\"mso-spacerun:'yes';font-family:宋体;mso-bidi-font-family:'Times New Roman';line-height:150%;color:rgb(0,0,0);font-size:12.0000pt;mso-font-kerning:1.0000pt;\">3</span><span style=\"mso-spacerun:'yes';font-family:宋体;mso-bidi-font-family:'Times New Roman';line-height:150%;color:rgb(0,0,0);font-size:12.0000pt;mso-font-kerning:1.0000pt;\">片（</span><span style=\"mso-spacerun:'yes';font-family:宋体;mso-bidi-font-family:'Times New Roman';line-height:150%;color:rgb(0,0,0);font-size:12.0000pt;mso-font-kerning:1.0000pt;\">1.5</span><span style=\"mso-spacerun:'yes';font-family:宋体;mso-bidi-font-family:'Times New Roman';line-height:150%;color:rgb(0,0,0);font-size:12.0000pt;mso-font-kerning:1.0000pt;\">毫克）以内，再辅以其它的消炎镇</span><span style=\"mso-spacerun:'yes';font-family:宋体;mso-bidi-font-family:'Times New Roman';line-height:150%;font-size:12.0000pt;mso-font-kerning:1.0000pt;\">痛药物，同样会取得单用秋水仙碱的效果，但副作用明显减少。</span><span style=\"mso-spacerun:'yes';font-family:宋体;mso-bidi-font-family:'Times New Roman';line-height:150%;font-size:12.0000pt;mso-font-kerning:1.0000pt;\"><o:p></o:p></span></p><p class=\"MsoNormal\" style=\"text-indent:0.0000pt;mso-char-indent-count:0.0000;text-autospace:ideograph-numeric;mso-pagination:none;line-height:150%;\"><span style=\"mso-spacerun:'yes';font-family:宋体;mso-bidi-font-family:'Times New Roman';line-height:150%;font-size:12.0000pt;mso-font-kerning:1.0000pt;\">（</span><span style=\"mso-spacerun:'yes';font-family:宋体;mso-bidi-font-family:'Times New Roman';line-height:150%;font-size:12.0000pt;mso-font-kerning:1.0000pt;\">3</span><span style=\"mso-spacerun:'yes';font-family:宋体;mso-bidi-font-family:'Times New Roman';line-height:150%;font-size:12.0000pt;mso-font-kerning:1.0000pt;\">）尿酸在组织和关节中沉积是痛风性关节炎的始动因素，因此，抑制尿酸盐的沉积是预</span><span style=\"mso-spacerun:'yes';font-family:宋体;mso-bidi-font-family:'Times New Roman';line-height:150%;color:rgb(0,0,0);font-size:12.0000pt;mso-font-kerning:1.0000pt;\">防和治疗痛风及其慢性并发症的关键所在。有关资料显示，尿酸在酸性环境中容易形成针样晶体在组织中沉积。在碱性环境中，尿酸溶解度升高，一方面不容易形成晶体沉</span><span style=\"mso-spacerun:'yes';font-family:宋体;mso-bidi-font-family:'Times New Roman';line-height:150%;font-size:12.0000pt;mso-font-kerning:1.0000pt;\">积下来；另一方面，已形成的晶体可以溶解，并随尿液排出体外。因此，痛风急性期或血尿酸水平升高的患者，特别是血尿酸水平超过</span><span style=\"mso-spacerun:'yes';font-family:宋体;mso-bidi-font-family:'Times New Roman';line-height:150%;font-size:12.0000pt;mso-font-kerning:1.0000pt;\">560</span><span style=\"mso-spacerun:'yes';font-family:宋体;mso-bidi-font-family:'Times New Roman';line-height:150%;font-size:12.0000pt;mso-font-kerning:1.0000pt;\">μ</span><span style=\"mso-spacerun:'yes';font-family:宋体;mso-bidi-font-family:'Times New Roman';line-height:150%;font-size:12.0000pt;mso-font-kerning:1.0000pt;\">mol/L</span><span style=\"mso-spacerun:'yes';font-family:宋体;mso-bidi-font-family:'Times New Roman';line-height:150%;font-size:12.0000pt;mso-font-kerning:1.0000pt;\">的患者，均应使用碱性药物，以缓解痛风症状，促进尿酸从肾脏排出。</span><span style=\"mso-spacerun:'yes';font-family:宋体;mso-bidi-font-family:'Times New Roman';line-height:150%;font-size:12.0000pt;mso-font-kerning:1.0000pt;\"><o:p></o:p></span></p><p class=\"MsoNormal\" style=\"text-indent:0.0000pt;mso-char-indent-count:0.0000;text-autospace:ideograph-numeric;mso-pagination:none;line-height:150%;\"><span style=\"mso-spacerun:'yes';font-family:宋体;mso-bidi-font-family:'Times New Roman';line-height:150%;font-size:12.0000pt;mso-font-kerning:1.0000pt;\">（</span><span style=\"mso-spacerun:'yes';font-family:宋体;mso-bidi-font-family:'Times New Roman';line-height:150%;font-size:12.0000pt;mso-font-kerning:1.0000pt;\">4</span><span style=\"mso-spacerun:'yes';font-family:宋体;mso-bidi-font-family:'Times New Roman';line-height:150%;font-size:12.0000pt;mso-font-kerning:1.0000pt;\">）急性痛风性关节炎主要以镇痛为主，不能使用降尿酸药物。因为急性期机体排泄尿酸的能力已发挥到极致，使用降尿酸药物一方面疗效差，更重要的是机体易受伤害。</span><span style=\"mso-spacerun:'yes';font-family:宋体;mso-bidi-font-family:'Times New Roman';line-height:150%;font-size:12.0000pt;mso-font-kerning:1.0000pt;\"><o:p></o:p></span></p>"
        }
    },
    methods:{
        onClickLeft(){
            this.$router.push({path:'/homepage'})
        },
        getTime(origiTime){
            var time=new Date(origiTime);
            return time.getFullYear() + "-" + (time.getMonth() + 1) + "-" + time.getDate()+' '+ time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
        },
    },
    created(){
        this.$http2({
            method:'post',
            // url:'http://117.78.27.3:8080/wxServer/ip/single.api',
            url:'ip/single.api',
            data:{
                id:this.id,
                
            }
        })
        .then(res=>{
            // console.log(res.data.data)
            const _this=this
            this.title=res.data.data.Title
            var originTime=res.data.data.PublishDate
            this.publishdate=_this.getTime(originTime)
            this.content=res.data.data.Content
        })
        .catch(err=>{
            console.log(err)
        })
    },
}
</script>
<style scoped>
.title{
    font-size: 20px;
    height: 50px;
    line-height: 50px;
    padding-left: 15px;
}
.publishdate{
    margin-top: 10px;
    font-size: 15px;
    color: darkgray;
    padding-left: 15px;
}
.content{
    width: 95%;
    margin: 0 auto;
    line-height: 0.8 !important;
}
</style>