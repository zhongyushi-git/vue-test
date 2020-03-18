//element-ui 面包屑组件封装
<template>
  <div class="breadcrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-for="(item,index) in breadList" :key="index">{{item}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    breadList: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.breadcrumb {
  background-color: #f7f2f7e3;
}
.el-breadcrumb {
  line-height: 30px;
}
</style>