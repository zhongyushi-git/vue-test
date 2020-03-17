<template>
  <div class="top">
    <div class="top-title">后台管理系统</div>
    <div class="right">
      <span>系统管理员</span>
      <img src="~assets/img/icon/exit.png" class="icon"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeTop"
};
</script>

<style scoped>
.top {
  height: 10vh;
  width: 100%;
  background: yellow;
  display: flex;
}
.top-title{
  font-size: 30px;
  line-height: 10vh;
  flex:8;
  margin-left: 20px;
}
.right{
  background: red;
  flex:2;
  line-height: 10vh;
  text-align: center;
}
.icon{
  width: 40px;
  height: 40px;
}
</style>