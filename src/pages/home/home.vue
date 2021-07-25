<template>
  <div class="home">
    <HeaderBar>
      <template slot="centerBar">
        首页
      </template>
    </HeaderBar>
    <!--    轮播-->
    <van-swipe :autoplay="3000" class="home-swipe" indicator-color="white">
      <van-swipe-item v-for="item in banner" :key="item.id"><img :alt="item.title" :src="item.image" class="swipe-img"/>
      </van-swipe-item>
    </van-swipe>
    <!-- 推荐栏目 -->
    <ul id="recommend">
      <li v-for="item in recommend" :key="item.id" class="recommend-item">
        <img :src="item.image">
        <div class="title">{{ item.title }}</div>
      </li>

    </ul>

    <!--    列表-->
    <van-tabs id="goodsList" background="#f6f6f6" v-model="activeName" :sticky="true" animated color="#00BFC0"
              title-active-color="#00BFC0" line-width="50px"	>
      <van-tab name="pop" ><template #title><div class="goodListBar">流行</div></template>
        <div class="GoodList">
          <div class="leftGoodList"><goodItem v-for="item in leftGoods" :key="item.index" :goodInfo="item"></goodItem></div>
          <div class="rightGoodList"><goodItem v-for="item in rightGoods" :key="item.index" :goodInfo="item"></goodItem></div>

        </div> <loadmore-no-data-tip></loadmore-no-data-tip></van-tab>
      <van-tab name="pop" ><template #title><div class="goodListBar">新款</div></template>
        <div class="GoodList">
          <div class="leftGoodList">左</div>
          <div class="rightGoodList">右</div>
        </div> <loadmore-no-data-tip></loadmore-no-data-tip></van-tab>
      <van-tab name="pop" ><template #title><div class="goodListBar">精选</div></template>
        <div class="GoodList">
          <div class="leftGoodList">左</div>
          <div class="rightGoodList">右</div>

        </div> <loadmore-no-data-tip></loadmore-no-data-tip></van-tab>

    </van-tabs>

  </div>
</template>

<script>
import {Swipe, SwipeItem} from 'vant';
import {reqBanner, reqGoodsList, reqRecommend} from "@/api";
import LoadmoreNoDataTip from "@/components/loadmore-noData-tip";
import goodItem from "@/pages/home/goodItem";

export default {
  name: 'home',
  components: {
    LoadmoreNoDataTip,
    'van-swipe': Swipe,
    'van-swipe-item': SwipeItem,
    goodItem,
  },
  data() {
    return {
      banner: [],
      recommend: [],
      tab: [],
      queryGoods: {page: 1, pageSize: 10, ordersby: 'orgPrice', sort: 'DESC', type: 'pop'},
      activeName: 'pop',
      goodsArr:{},
      leftGoods:[],
      rightGoods:[],
    };
  },
  async mounted() {

    this.banner = await reqBanner();
    this.recommend = await reqRecommend();
    this.goodsArr = await reqGoodsList(this.queryGoods);
    this.goodsArr.goods.forEach((good,index)=>{
      if( !(index%2 )){
        this.leftGoods.push(good)
      }else{
        this.rightGoods.push(good)
      }
    })


  },


}
</script>

<style lang="less" scoped>
@import url(./../../assets/css/variables);

.home {
  background-color: @bColorLightest;
  min-height: 100%;
  //轮播
  .home-swipe {
    margin: 26px auto 40px;
    background-color: @themeColor;
    color: #fff;
    font-size: 20px;
    text-align: center;
    border-radius: 10px;
    width: 95%;

    .swipe-img {
      width: 100%;
      display: block;
    }
  }

  //推荐商品
  #recommend {
    display: flex;
    width: 95%;
    margin: 0 auto 70px;
    flex-wrap: wrap;
    justify-content: space-around;

    .recommend-item {
      width: 22%;

      img {
        width: 75%;
        display: block;
        margin: 0 auto;
      }

      .title {
        margin-top: 20px;
        text-align: center;
        font-size: 32px;
        color: @bColor;
        font-weight: 600;
      }
    }
  }

  //商品列表
  #goodsList {
    width: 95%;
    margin: 0 auto;

  .goodListBar{
    height: 90px;
    line-height: 90px;
    font-size: 40px;
    font-weight: 500;
  }
    /deep/ .van-tabs__wrap {
      height: 1.2rem !important;
    }
   .GoodList{
     display: flex;
     width: 95%;
     margin: 0 auto;

     .leftGoodList,.rightGoodList{
       flex:1;
     }
     .leftGoodList{
       margin-right:10px ;
     }

   }
  }
}

</style>