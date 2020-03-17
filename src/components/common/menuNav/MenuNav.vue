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
        >{{child.title}}</el-menu-item>
      </el-submenu>
      <!-- <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项1</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>导航二</span>
        </template>
        <el-menu-item index="2-1">选项3</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>导航三</span>
        </template>
        <el-menu-item index="3-1">选项3</el-menu-item>
      </el-submenu>-->
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
      default(){
        return []
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