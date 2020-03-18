<template>
  <menu-nav :menus="menus"></menu-nav>
</template>

<script>
import MenuNav from "components/common/elementComponent/MenuNav";
export default {
  name: "HomeNav",
  data() {
    return {
      menus: [
        {
          index: "1",
          title: "用户管理",
          icon:"el-icon-location",
          children: [
            {
              index: "1-1",
              title: "用户列表",
              path:'/home/user/userList'
            },
          ]
        },
        {
          index: "2",
          title: "系统管理",
          icon:"el-icon-menu",
          children: [
            {
              index: "2-1",
              title: "登录日志",
              path:'/home/system/loginLog'
            },
            {
              index: "2-2",
              title: "操作日志",
              path:'/home/system/oprationLog'
            }
          ]
        }
      ]
    };
  },
  components: {
    MenuNav
  }
};
</script>

<style scoped>
.nav {
  height: 90vh;
  width: 15%;
}
</style>