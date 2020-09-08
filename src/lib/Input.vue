<template>
  <div class="wrapper" :class="{error}">
   <input :value="value" type="text" :disabled='disabled' :readonly='readonly' @change="$emit('change')">
   <template v-if="error">
     <div>icon</div>
     <span>{{error}}</span>
     </template>
  </div>
</template>

<script>
export default {
    props:{
      value:{
        type:String

      },
      disabled:{
        type:Boolean,
        default:false
      },
      readonly:{
        type:Boolean,
        default:false
      },
      error:{
        type:String
        
      }
    }
}
</script>

<style lang="scss" >
$height:32px;
  $border-color:#999;
  $border-color-hover:#666;
  $border-redius:4px;
  $font-size:12px;
  $box-shadow-color:rgba(0,0,0,0.5);
  $red:#F1453D;
.wrapper{
  display: inline-block;
  font-size: $font-size;
  > input{
    height: 32px;
    border:1px solid $border-color;
    border-radius: 4px; 
    padding:0 8px;
    &-hover{
      border-color: $border-color;
    }
    &:focus{
      box-shadow:inset 0 1px 3px $box-shadow-color ;
      outline: none;
    }
    &[disabled],&[readonly]{
      border-color: #bbb;
      color:#bbb;
      cursor:not-allowed;
    }
  }
   &.error{
    >input{
      border-color: $red;
    }
  }
}

</style>