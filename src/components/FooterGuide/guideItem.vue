<template>
<div class="guide-item" :class="{active: $route.path=== path}" @click="itemClick()">
  <span> <i :class='["iconfont",fontclass,]'   ></i></span>
  <span>{{text}}</span>
</div>
</template>

<script>
export default {
  name: "guide-item",
  props: {
    // 接收父组件传的数据
    fontclass:String,
    text:String,
    path:String,
},
  methods:{
    itemClick(){
      if (this.$route.path !== this.path)
      this.$router.push(this.path)
    }

  },
}
</script>

<style scoped>

</style>