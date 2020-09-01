<template>
  <div>
  Button 示例
  </div>
  <h1>示例1</h1>
  <div class="wrap" >
    <Button >按钮</Button>
    <Button theme='button'>按钮</Button>
    <Button theme='link'>按钮</Button>
    <Button theme='text'>按钮</Button>
  </div>
</template> 


<script lang='ts'>
import Button from '../lib/Button.vue'
export default {
  components:{Button},
  setup(){
    const onClick = ()=>{
      console.log('hi')
    }
    return {onClick}
  }
}
</script>

<style >
.wrap{
  display: flex;
  justify-content: space-around;
}


</style>