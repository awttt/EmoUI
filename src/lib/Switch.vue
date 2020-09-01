<template>
   <button class="gulu-switch" @click="toggle" :class="{'gulu-checked':value}">
     <span></span>
     </button>
   <div>{{value}}</div>
</template>

<script>
import { ref } from 'vue'
export default{
  props:{
    value:Boolean
  },
  setup(props,context){
    
   
    const toggle = ()=>{
      context.emit('update:value',!props.value)
    }
     return {toggle}
  }
}
</script>

<style lang="scss" >
  $h: 22px;
  $h2: $h - 4px;
  .gulu-switch{
    height: $h;
    width: $h*2;
    border: none;
    background: grey;
    border-radius: $h/2;
    position: relative;
  
  span{
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background:white;
    border-radius: $h2 / 2;
    transition: left .3s;
  } 
   &.gulu-checked{
    background: #0ACE66;
  }
  &.gulu-checked > span {
    left: 24px
  }
    &:focus { outline: none; }
  &:active {
    > span { width: $h2 + 4px; }
  }
  &.gulu-checked:active {
    > span { width: $h2 + 4px; margin-left: -4px; }
  }
}
</style> 
