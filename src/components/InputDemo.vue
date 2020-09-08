<template>
  <div >
         <div class="box">
    <Input value="普通"/>
    </div>
    <div class="box">
    <Input value="disabled" disabled/>
    </div>
    <div class="box">
    <Input value="readonly" readonly/>
    </div>
    <div class="box">
    <Input value="error" error="姓名不能少于两个字"/>
   </div>
  </div>
</template>

<script>
import Input from "../lib/Input.vue";
export default {
    components:{
       Input
    }
}
</script>

<style lang="scss">
.box{
    margin-top: 20px;
}
</style>