<template>
  <div>
    <breadcrumb :breadList="breadList"></breadcrumb>
    <search></search>
    <table-comp :tableObj="tableObj"></table-comp>
    <pagination :pageData="pageData"></pagination>
  </div>
</template>

<script>
import breadcrumb from "components/common/elementComponent/Breadcrumb";
import search from "components/content/searchComponent/UserSearch";
import tableComp from "components/common/elementComponent/Table";
import pagination from "components/common/elementComponent/Pagination";

// import request from './network/request'

export default {
  name: "UserList",
  data() {
    return {
      breadList: ["首页", "用户管理", "用户列表"],
      tableObj: {
        stripe: true,
        border: true,
        height: "400px",
        // selection:true,
        tableTitle: [
          {
            label: "姓名",
            prop: "name",
            sortable: true
          },
          {
            label: "年龄",
            prop: "age",
            sortable: true
          }
        ],
        tableData: [
          {
            name: "张三",
            age: 20
          },
          {
            name: "李四",
            age: 22
          },
          {
            name: "张三",
            age: 22
          },
          {
            name: "李四",
            age: 23
          },
          {
            name: "张三",
            age: 19
          },
          {
            name: "李四",
            age: 25
          },
         
        ]
      },
      pageData: {
        total: 0
      }
    };
  },
  components: {
    breadcrumb,
    search,
    tableComp,
    pagination,
    
  },
  created() {
    this.pageData.total = this.tableObj.tableData.length;
  }
};
</script>

<style scoped>
</style>