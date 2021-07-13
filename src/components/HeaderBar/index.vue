<template>
<div id="HeaderBar">
  头部
</div>
</template>

<script>
export default {
  name: "HeaderBar"
}
</script>

<style lang="less" scoped>
@import url(./../../assets/css/variables);
#HeaderBar{
  height: 110px;
  background-color:@themeColor;
  display: flex;
  justify-content: center;
  font-size: 42px;
  color: @bColorLightest;
  line-height: 110px;
  width: 100%;
}
</style>