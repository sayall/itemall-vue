<template>
  <div class="home">
    <HeaderBar></HeaderBar>
    <van-swipe class="home-swipe" :autoplay="2000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>


  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
import { Swipe, SwipeItem } from 'vant';
  export default {
    name: 'home',
    components:{
      HeaderBar,
      'van-swipe':Swipe,
      'van-swipe-item':SwipeItem,
    },
    methods:{

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