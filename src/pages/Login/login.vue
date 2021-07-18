<template>
  <div id="login">
    <div class="loginimg">

      <img src="./../../assets/img/logo.png"  alt="欢迎登录 itemall" />
    </div>
    <ul class="loginbar">
      <li>账户<br>
        <input placeholder="请输入手机号" type="text">
      </li>
      <li>密码<br>
        <input placeholder="请输入密码" type="password">
      </li>
    </ul>
    <van-button block  round  id="subLogin">立即登录</van-button>
    <div class="otherInfo">
      <div><a>忘记密码</a></div>
      <div><a>注册账户</a></div>
    </div>

  </div>
</template>

<script>
export default {
  name: "login"
}
</script>

<style lang="less" scoped>
#login{
  @import url(./../../assets/css/variables);
  height: 100%;
  font-size: 32px;
  padding: 0 60px;
  .loginimg{
    display: flex;
    height: 400px;
    justify-content:  center;
    align-items: center;
    margin-bottom: 20px;
  }
  .loginbar{
    color: @bColor;
    margin-bottom: 150px;
    li{
      .bottom-border-1px(@bColorlighter);
      margin: 0 auto;
      height: 140px;
      line-height: 70px;
      input{
      font-size: 40px;
      }
    }
  }
  #subLogin{
    box-sizing: border-box;
    height: 92px;
    color: @bColorW;
    background-color: @themeColor;
    font-weight: 500;
    font-size: 34px;
  }
  .otherInfo{
    margin:45px auto;
    display: flex;
    justify-content: space-around;
  }

}
</style>