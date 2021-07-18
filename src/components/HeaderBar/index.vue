<template>
  <div id="HeaderBar" :class="bclass">
    <div class="leftBar"><slot name="leftBar"></slot></div>
      <div class="centerBar"> <slot name="centerBar"></slot></div>
    <div class="rightBar"> <slot name="rightBar"></slot></div>

  </div>
</template>

<script>
export default {
  name: "HeaderBar",
  props: {
    bclass: {
      type: String,
      default: 'dClass',
    },

  }
}
</script>

<style lang="less">
@import url(./../../assets/css/variables);

#HeaderBar {
  height: 110px;
  display: flex;
  justify-content: space-around;
  font-size: 42px;
  line-height: 110px;
  width: 100%;
  &.dClass {
    background-color: @themeColor;
    color: @bColorLightest;
  }
  &.wClass {
    background-color: @bColorLightest;
    color: @themeColor;
  }
  .rightBar{
    font-size: 32px;
  }
}

</style>