<template>
  <div class="footer-guide">
    <guide-item v-for="item in  guideItem" :key="item.id" :fontclass="item.icon" :path="item.path"
                :text="item.text"></guide-item>

  </div>
</template>

<script>
import guideItem from './guideItem'

export default {
  name: "FooterGuide",
  components: {
    "guide-item": guideItem,
  },
  data() {
    return {
      guideItem: [
        {id: 1, icon: "icon-iconfonthome0", text: "首页", path: "/home"},
        {id: 2, icon: "icon-fenlei", text: "分类", path: "/category"},
        {id: 3, icon: "icon-shangcheng", text: "购物车", path: "/cart"},
        {id: 4, icon: "icon-user", text: "我的", path: "/profile"},
      ],
    }
  }
}
</script>

<style lang="less" scoped>
@import url(./../../assets/css/variables);

.footer-guide {
  .top-border-1px(@bColorlighter);
  position: fixed;
  height: 115px;
  width: 100%;
  left: 0;
  bottom: 0;
  display: flex;

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
      font-size: 20px;

      i {
        font-size: 40px;
      }
    }

  }

}

</style>