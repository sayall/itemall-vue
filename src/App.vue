<template>
  <div id="app"  >
   <router-view id="main-view">
<!--     展示区-->
   </router-view>
    <FooterGuide v-if="!$route.meta.isHidden">
<!--      导航-->
    </FooterGuide>

  </div>
</template>

<script>
//引入导航条
import FooterGuide from '@/components/FooterGuide/FooterGuide'
export default {
  name: 'App',
  components: {
    FooterGuide
  }
}
</script>

<style lang="less">
@import url(./assets/css/variables);
@import url(./assets/font/iconfont.css);
html,body,#app{
  min-height: 100%;
  font-family:Noto Sans SC;
  font-style: normal;
  font-weight: 400;
}
//最小高度及设置底部
#main-view{
  min-height: 100vh;
  padding-bottom: @footHeight;
  background-color: @bColorLightest;
  box-sizing: border-box;
}



</style>
