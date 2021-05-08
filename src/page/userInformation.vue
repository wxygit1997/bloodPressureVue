<template>
    <div>
        <van-nav-bar
        title="我的信息"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        />
        <div class="unmodifiable">
            <van-field
                v-model="DisplayName"
                name="昵称"
                label="昵称"
                placeholder="用户名"
                readonly
            />
            <van-field
                v-model="IDCard"
                name="身份证号"
                label="身份证号"
                placeholder="身份证号"
                readonly
            />
            <van-field
                v-model="PatientID"
                name="患者编号"
                label="患者编号"
                placeholder="患者编号"
                readonly
            />
            <van-field
                v-model="Tel"
                name="手机号码"
                label="手机号码"
                placeholder="手机号码"
                readonly
            />
            <van-field
                v-model="Sex"
                name="性别"
                label="性别"
                placeholder="性别"
                readonly
            />
            <van-field
                v-model="Indentity"
                name="身份"
                label="身份"
                placeholder="身份"
                readonly
            />
            <van-field name="radio" label="痛风门诊">
                <template #input>
                    <van-radio-group v-model="radio" direction="horizontal">
                    <van-radio name="1">是</van-radio>
                    <van-radio name="2">否</van-radio>
                    </van-radio-group>
                </template>
            </van-field>
            <van-field
                v-model="RegisterDate"
                name="注册时间"
                label="注册时间"
                placeholder="身份"
                readonly
            />
        </div>
        <div class="modifiable">
            <van-form @submit="onSubmit">
                <van-field
                v-model="Email"
                name="邮箱"
                label="邮箱"
                placeholder=""
                />
                <van-field
                readonly
                clickable
                label="民族"
                :value="nationvalue"
                placeholder="请选择"
                @click="showNationPicker = true"
                />
                <van-popup v-model="showNationPicker" round position="bottom">
                    <van-picker
                        show-toolbar
                        :columns="nations"
                        @cancel="showNationPicker = false"
                        @confirm="onNationConfirm"
                    />
                </van-popup>
                <van-field
                readonly
                clickable
                label="职业"
                :value="jobvalue"
                placeholder="请选择"
                @click="showJobPicker = true"
                />
                <van-popup v-model="showJobPicker" round position="bottom">
                    <van-picker
                        show-toolbar
                        :columns="jobs"
                        @cancel="showJobPicker = false"
                        @confirm="onJobConfirm"
                    />
                </van-popup>
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">提交</van-button>
            </div>
            </van-form>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            tel:window.localStorage.getItem("MobilePhone"),
            DisplayName:"",
            IDCard:"",
            Tel:"",
            // Sex:'男',
            Sex:(this.Sex_sign==true)?'女':'男',
            Sex_sign:true,
            Indentity:"患者",
            Email:"",
            PatientID:"",
            RegisterDate:"",
            radio:'1',
            nationvalue:'',
            jobvalue:'',
            showNationPicker:false,
            showJobPicker:false,
            patDetailID:'',
            patientType:'',
            nations:['汉族', '蒙古族', '回族'],
            jobs:['干部','专业技术人员','办事人员及有关人员','商业及服务人员','农、林、牧、渔、水利业生产人员','生产、运输人员及有关人员','军人','不便分类其他人员','无业者','离/退休','学生','不详']
        }
        
    },
    methods:{
        onClickLeft(){
            this.$router.push({path:'/homeuserlogged'})
        },
        requestData(){
            this.$http({
                method:'post',
                url:'gout/patient/getByTel',
                data:{
                    tel:this.tel
                }
            })
            .then(res=>{
                console.log(res.data.data)
                this.DisplayName=res.data.data.DisplayName
                this.IDCard=res.data.data.IDCard
                this.Tel=res.data.data.Tel
                this.Sex_sign=res.data.data.Sex
                // Sex:"",
                // Identity:"",
                // this.Mail=res.data.data.Mail,
                this.PatientID=res.data.data.PatientID
                this.RegisterDate=res.data.data.RegisterDate
                this.PatientID = res.data.data.PatientCodePrefix + "-" + res.data.data.PatientCode
                this.patDetailID=res.data.data.patDetailID
                this.patientType=res.data.data.patientType
            })
            .catch(error=>{
                alert('error');
            })
        },
        onSubmit(){
            this.$http({
                method:'post',
                url:'gout/patient/editVx',
                data:{
                    patDetailID: this.patDetailID,
                    email: this.Email,
                    nation:this.nationvalue,
                    job: this.jobvalue,
                    // patientType: that.data.elitePatientType_value,
                }
            })
            .then(res=>{
                this.$toast.success('修改成功');
                console.log(res.data)
            })
            .catch(error=>{
                console.log(error)
            }
            )
        },
        onNationConfirm(value){
            this.nationvalue=value;
            this.showNationPicker=false;
        },
        onJobConfirm(value){
            this.jobvalue=value;
            this.showJobPicker=false;
        }
    },
    mounted(){
        this.requestData()
    }
}
</script>
<style scoped>
.unmodifiable {
    width: 95%;
    /* border: 1px solid silver; */
    box-shadow: 3px 3px 5px 0px silver;
    text-align: center;
    margin: 0  auto;
    margin-bottom: 10px;
}
.modifiable{
    width: 95%;
    /* border: 1px solid silver; */
    box-shadow: 3px 0px 5px 0px silver;
    text-align: center;
    margin: 0  auto;
    margin-bottom: 10px;
}
</style>
