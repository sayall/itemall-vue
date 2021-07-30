<template>
  <div class="goodWaterfall">
    <div class="GoodList" >
      <div class="leftGoodList"><goodItem v-for="item in leftGoods" :key="item.index" :goodInfo="item"></goodItem></div>
      <div class="rightGoodList"><goodItem v-for="item in rightGoods" :key="item.index" :goodInfo="item"></goodItem></div>
    </div>
    <loadmore-no-data-tip v-if="finished"></loadmore-no-data-tip>
  </div>

</template>

<script>
import goodItem from "@/components/goodItem/goodItem";
import {reqGoodsList} from "@/api";
import {throttle, toast} from "@/util";
import LoadmoreNoDataTip from "@/components/loadmore-noData-tip";

export default {
  name: "goodWaterfall",
  components: {goodItem,LoadmoreNoDataTip},
  data(){
    return {
      queryGoods: {page: 1, pageSize: 10, ordersby: 'orgPrice', sort: 'DESC', type: 'pop'},
      goodsArr:{},
      leftGoods:[],
      rightGoods:[],
      maxpage:0,
      isLoadding: false,
      finished: false,
    };
  },
  props:['type','activeName'],
  computed:{
    isActive(){
      return this.type==this.activeName
    }

  },
  async  mounted() {
    //初始化界面数据
    this.queryGoods.type=this.type;
    this.goodsArr = await reqGoodsList(this.queryGoods);
    this.maxpage=this.goodsArr.pagesCount;
    this.goodsArr.goods.forEach((good,index)=>{
      if( !(index%2 )){
        this.leftGoods.push(good)
      }else{
        this.rightGoods.push(good)
      }
    });

    //设置滚动监听
    this.$nextTick(window.addEventListener('scroll',this.handler)) ;



  },
  beforeDestroy() {
    //销毁滚动监听
    window.removeEventListener('scroll',this.handler);
  },
  methods:{
    async scrollEvent(){
      //如果未激活，则直接return
      if (!this.isActive){
        return
      }
      //滚动量+可见区大小>全文宽度
      if (document.documentElement.scrollTop
          + document.documentElement.offsetHeight
          >= document.body.scrollHeight-30) {
       if(this.finished||this.isLoadding){
         //如果已经到达最大页码或者正在加载中，则不请求数据
         return
       }else{
         //打开正在请求的开关，禁止连续请求
         this.isLoadding=true;
        this._queryGoods().then(
            //成功则修改isLoadding并返回
            respose =>{
              this.isLoadding=false;
              return respose;
            },
            //恢复当前页码，修改isLoadding，并报错提示
            error => {
              toast(error);
              this.isLoadding=false;
              this.queryGoods.page--;
              return error;
            }
        )

       }

      }
    },
    _queryGoods: async function () {
      this.queryGoods.page++;
      if(this.queryGoods.page>this.maxpage)
      {
        this.finished= true;
        this.queryGoods.page--;
        return
      }
      //当前请求数据
      this.goodsArr = await reqGoodsList(this.queryGoods);
      this.maxpage = this.goodsArr.pagesCount;
      this.goodsArr.goods.forEach((good, index) => {
        if (!(index % 2)) {
          this.leftGoods.push(good)
        } else {
          this.rightGoods.push(good)
        }
      }
      )
    },
    handler()
    {
     throttle(this.scrollEvent,1000);
    }
},


  }
</script>

<style lang="less" scoped>

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
</style>