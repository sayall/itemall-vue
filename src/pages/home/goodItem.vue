<template>
<div class="goodItem">
<div class="goodImg"><img :src="img"></div>
 <div class="goodTitle">{{goodInfo.title}}</div>
  <div class="goodtMore"><span class="goodPrice">{{goodInfo.price}}</span><i>…</i></div>

</div>
</template>

<script>
export default {
  name: "goodItem",
  props:['goodInfo'],
  computed:{
    img:function (){
      return JSON.parse(this.goodInfo.show).img
    }
  },
}

</script>

<style scoped lang="less">
@import url(./../../assets/css/variables);
.goodItem{
  width: 100%;
  margin: 10px 0;
  border-radius:10px ;
  background:@bColorW ;
  overflow: hidden;
  .goodImg{
  img{
    width: 100%;
  }
  }
  .goodTitle{
    margin-top: 10px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;  /*截取2行*/
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 32px;
    line-height: 40px;
    padding: 0 20px;
    color: @bColorDark;

  }
  .goodtMore{
    margin: 32px 0;
    padding: 0 20px;
    .goodPrice{
    font-size: 26px;
    font-weight:500;
      color: red;
    }
    i{
      float: right;
    }
  }

}

</style>