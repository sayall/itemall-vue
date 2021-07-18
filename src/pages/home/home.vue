<template>
  <div class="home">
    <HeaderBar >
      <template slot="centerBar">
       首页
      </template>
    </HeaderBar>
    <van-swipe class="home-swipe" :autoplay="2000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>

    </van-swipe>


  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vant';
import {reqBanner} from "@/api";
import {toast} from "@/util";

  export default {
    name: 'home',
    components:{
      'van-swipe':Swipe,
      'van-swipe-item':SwipeItem,
    },
    data() {
      return {

      };
    },
    async mounted() {

      console.log(await reqBanner())
    },

    
  }
</script>

<style lang="less" scoped>
@import url(./../../assets/css/variables);
.home{
  background-color: @bColorLightest;
  min-height:100%;
  .home-swipe{
    margin:26px 18px ;
    background-color:@themeColor;
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
  }
}

</style>