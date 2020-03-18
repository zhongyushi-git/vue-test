//element-ui 分页组件封装
<template>
  <el-pagination
    background
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="pageData.currentPage"
    :page-sizes="pageData.pageSizes"
    :page-size="pageData.pageSize"
    layout="total, sizes, prev, pager, next, jumper"
    :total="pageData.total"
  ></el-pagination>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    pageData: {
      type: Object,
      default() {
        return {
          currentPage: 1,
          pageSizes: [10, 20, 50, 100],
          pageSize: 10,
          total: 0
        };
      }
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>

<style scoped>
</style>