<template>
  <div>
    首页
    <van-button  class="test" @click="testclick">test</van-button>

  </div>
</template>

<script>
import { Button } from 'vant'
import { Toast } from 'vant';
  export default {
    name: 'home',
    components:{
      'van-button':Button,
    },
    methods:{
      testclick(){

  Toast('提示内容');
      },
    },
    
  }
</script>

<style lang="less" scoped>
@import url(./../../assets/css/variables);
.test{
  background-color:@themeColor;
  color:@bColorLightest
}

</style>