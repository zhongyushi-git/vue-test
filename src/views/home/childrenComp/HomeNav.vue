<template>
  <menu-nav :menus="menus"></menu-nav>
</template>

<script>
import MenuNav from "components/common/menuNav/MenuNav";
export default {
  name: "HomeNav",
  data() {
    return {
      menus: [
        {
          index: "1",
          title: "导航1",
          icon:"el-icon-location",
          children: [
            {
              index: "1-1",
              title: "选项1"
            },
            {
              index: "1-2",
              title: "选项2"
            }
          ]
        },
        {
          index: "2",
          title: "导航2",
          icon:"el-icon-menu",
          children: [
            {
              index: "2-1",
              title: "选项1"
            },
            {
              index: "2-2",
              title: "选项2"
            }
          ]
        }, {
          index: "3",
          title: "导航3",
          icon:"el-icon-document",
          children: [
            {
              index: "3-1",
              title: "选项1"
            },
            {
              index: "3-2",
              title: "选项2"
            }, {
              index: "3-3",
              title: "选项3"
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