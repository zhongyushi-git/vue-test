<template>
  <div class="top">
    <div class="top-title">后台管理系统</div>
    <div class="right">
      <span class="users">系统管理员</span>
      <a href="javascript:void(0)" @click.prevent="loginout" title="退出系统">
        <img src="~assets/img/icon/exit.png" class="icon" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeTop",
  methods: {
    loginout() {
      this.$confirm("确定退出系统吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        //清除token
        // localStorage.clear()
        this.$router.push("/login");
      });
    }
  }
};
</script>

<style scoped>
.top {
  height: 10vh;
  width: 100%;
  background: rgb(94, 80, 95);
  display: flex;
  color: #fff;
}
.top-title {
  font-size: 30px;
  line-height: 10vh;
  flex: 8;
  margin-left: 20px;
}
.right {
  flex: 2;
  line-height: 10vh;
  text-align: center;
}

.users {
  margin-right: 30px;
}
.icon {
  vertical-align: middle;
  width: 30px;
  height: 30px;
}
</style>