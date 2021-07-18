<template>
  <div :class="{active: $route.path=== path}" class="guide-item" @click="itemClick()">
    <span> <i :class='["iconfont",fontclass,]'></i></span>
    <span>{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: "guide-item",
  props: {
    // 接收父组件传的数据
    fontclass: String,
    text: String,
    path: String,
  },
  methods: {
    itemClick() {
      if (this.$route.path !== this.path)
        this.$router.push(this.path)
    }

  },
}
</script>

<style lang="less" scoped>
@import url(./../../assets/css/variables);

.guide-item {
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: @bColorDark;

  &.active {
    color: @themeColor;
  }

  span {
    font-size: 26px;
    i {
      font-size: 50px;
    }
  }

}
</style>