<template>
    <div @click="getTel">
        test
    </div>
</template>
<script>
import instance from '../api/axios-init'
export default{
    data(){
        return{
            tel:"13869851158"
        }
        
    },
    methods:{
        getTel(){
            this.$http({
                method:'post',
                url:'http://117.78.27.3:8080/gout2.0.hw4.stable/gout/patient/getByTel',
                data:{
                    tel:this.tel
                }
            })
            .then(res=>{
                console.log(res.data);
                
            })
            .catch(error=>{
                alert('error');
            })
        }
    }
}
</script>
