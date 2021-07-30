<template>
  <div class="detail">
    <!-- 轮播-->
    <van-swipe :autoplay="3000" class="good-swipe" indicator-color="white" @change="onChange">
      <van-swipe-item><img class="good-img"
                           src="//s11.mogucdn.com/mlcdn/c45406/180819_5begbcea11gjfi875e542h6ah815k_750x1000.jpg"/>
      </van-swipe-item>
      <van-swipe-item><img class="good-img"
                           src="//s5.mogucdn.com/mlcdn/c45406/180819_3chb59h0f8k4iag49e90aik3dl8dg_750x812.jpg"/>
      </van-swipe-item>
      <template #indicator>
        <div class="good-indicator">{{ current + 1 }}/2</div>
      </template>
    </van-swipe>
    <!-- 商品信息-->
    <div class="good-info-main">
      <div class="goodPrice"><span class="goodskuPrice">198.00</span>
        <div class="goodOptions"><span class="iconfont icon-shoucang1"></span>收藏</div>
      </div>
      <div class="goodTitle">{{goodDetailInfo.itemInfo.title}}</div>
      <div class="goodColumns"><span  v-for="(item,index) in goodDetailInfo.columns" :key="index" class="goodColumnsItems">{{item}}</span></div>
    </div>
    <!--  信息栏目-->
    <!--详情-->
    <div class="goodDetail">详情</div>
    <!--  -->
    <!--  加入购物车-->
    <van-goods-action class="goodCartGuide">
      <van-goods-action-icon class="guideIcon" text="客服" @click="onClickHome" >
        <template #icon>
          <span class="iconfont icon-kefu1"></span>
      </template></van-goods-action-icon>
      <van-goods-action-icon class="guideIcon"  icon="shop-o" text="店铺" @click="onClickIcon" >
        <template #icon>
          <span class="iconfont icon-dianpu"></span>
        </template></van-goods-action-icon>
      <van-goods-action-icon class="guideIcon"  icon="cart-o" text="购物车"  badge="5"  @click="onClickCart" >
        <template #icon>
          <span class="iconfont icon-bao"></span>
        </template></van-goods-action-icon>
      <van-goods-action-button class="guidBtn"  color="#090c19" text="加入购物车" @click="onClickButton"/>
      <van-goods-action-button  class="guidBtn"  color="#16c1bc" text="立即购买" @click="onClickButton" />
    </van-goods-action>

  </div>
</template>

<script>
import {getGoodDetail} from "@/api";
import {Swipe, SwipeItem, GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';
import {toast} from "@/util";

export default {
  name: "goodDetail",
  data() {
    return {
      goodDetailInfo: {},
      current: 0,
    }
  },
  components: {
    'van-swipe': Swipe,
    'van-swipe-item': SwipeItem,
    'van-goods-action':GoodsAction,
    'van-goods-action-icon':GoodsActionIcon,
    'van-goods-action-button':GoodsActionButton,
  },
  async mounted() {
    this.goodDetailInfo = await getGoodDetail(this.$route.params.gid);
    this.goodDetailInfo.columns = JSON.parse(this.goodDetailInfo.columns);
    this.goodDetailInfo.detailInfo = JSON.parse(this.goodDetailInfo.detailInfo);
    //sku信息
    this.goodDetailInfo.itemInfo = JSON.parse(this.goodDetailInfo.itemInfo);
    //商品参数
    this.goodDetailInfo.itemParams = JSON.parse(this.goodDetailInfo.itemParams);
    //店铺信息
    this.goodDetailInfo.shopInfo = JSON.parse(this.goodDetailInfo.shopInfo);
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
      onClickIcon() {
        toast('点击图标');
      },
    onClickHome(){
      this.$router.push('/');
    },
    onClickCart(){
      this.$router.push('/cart');
    },
      onClickButton() {
        toast('点击按钮');
      },
    },


}
</script>

<style lang="less" scoped>
@import url(./../../assets/css/variables);

.detail {
  width: 100%;
  min-height: 100%;
  //轮播
  .good-swipe {
    width: 100%;
    position: relative;
    height: 690px;
    overflow: hidden;

    .good-img {
      width: 100%;
      //max-height:690px;
      display: block;
      pointer-events: none;
    }

    .good-indicator {
      color: white;
      border-radius: 18px;
      position: absolute;
      right: 20px;
      bottom: 25px;
      padding: 10px 20px;
      font-size: 28px;
      background: rgba(0, 0, 0, 0.1);
    }
  }
  //卡片信息
  .good-info-main {
    box-sizing: border-box;
    padding: 20px 24px;
    margin: 20px auto;
    width: 95%;
    background-color: @bColorW;
    border-radius: 15px;
    //第一行 价格 收藏
    .goodPrice {
      display: flex;
      height: 100px;
      justify-content: space-between;
      line-height: 100px;
      //价格
      .goodskuPrice {
        font-size: 44px;
        color: @themeColor;
        font-weight: 500;
        &:before {
          content: "¥";
          font-size: 26px;
          padding-right: 5px;
        }
      }
      //收藏
      .goodOptions {
        text-align: center;
        margin: 20px 0;
        display: flex;
        flex-direction: column;
        line-height: 40px;
        font-size: 24px;
        color: @bColorlighter;
        .iconfont {
          font-size: 50px;
          color: @bColorDark;
          font-weight: 600;

        }
      }
    }
    //第二行 商品标题
    .goodTitle{
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      font-size: 36px;
      line-height: 50px;
      height: 90px;
      padding:10px 0 ;
      vertical-align: middle;
      color:@bColorDark;
      font-weight: 500;
    }
    //第三行 关键字
    .goodColumns{
      padding-top: 20px;
      .goodColumnsItems{
        display: inline-block;
      margin-right: 10px;
        font-size: 26px;
        height: 42px;
        background-color: #def6f5;
        line-height: 42px;
        padding:8px 20px;
        color: @themeColor;
        border-radius: 10px;
      }
    }
  }
  //详情
  .goodDetail{
    background-color: turquoise;
    height: 800px;
    width: 95%;
    margin: 0 auto;
  }
  //加入购物车
  .goodCartGuide{
    height: 120px;
    .guideIcon{
      width: 100px;
      font-size:24px ;
      color: @bColorlighter;
      text-align: center;
      .iconfont{
        font-size:45px ;
        margin-left:-15px ;
        color: @bColor;
      }
    }
    .guidBtn{
      height: 80px;
     &:first-child{
       margin-left: 22px;
     }
      &:last-child{
        margin-right: 22px;
      }
    }
  }
}


</style>