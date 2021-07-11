<template>
  <div  >
   <router-view>
<!--     展示区-->
   </router-view>
    <FooterGuide>
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


</style>
