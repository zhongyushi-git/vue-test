//element-ui 菜单组件封装
<template>
  <div class="nav-div">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :unique-opened="true"
    >
      <el-submenu v-for="(item,index) in menus" :key="index" :index="item.index">
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{item.title}}</span>
        </template>
        <el-menu-item
          v-for="(child,index2) in item.children"
          :key="index2"
          :index="child.index"
          @click="$router.push(child.path)"
        >{{child.title}}</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "MenuNav",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  props: {
    menus: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.nav-div {
  width: 15%;
}
.el-menu {
  border-right: none;
}
</style>