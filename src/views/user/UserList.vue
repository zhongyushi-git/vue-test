<template>
  <div>
    <breadcrumb :breadList="breadList"></breadcrumb>
    <search @getSelect="getSelect"></search>
    <table-comp :tableObj="tableObj" ref="tableRef"></table-comp>
    <pagination :pageData="pageData"></pagination>
  </div>
</template>

<script>
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
        selection:true,
        tableTitle: [
          {
             label: "id",
            prop: "id",
            sortable: true
          },
          {
            label: "姓名",
            prop: "name",
            sortable: true
          },
          {
            label: "年龄",
            prop: "age",
            sortable: true,
            //格式化方法
            formatMethod: function(row) {
              return row.age + ".0";
            }
          }
        ],
        tableData: [
          {
            id:1,
            name: "张三",
            age: 20
          },
          {
            id:2,
            name: "李四",
            age: 22
          },
          {
            id:3,
            name: "张三",
            age: 22
          },
          {
            id:4,
            name: "李四",
            age: 23
          },
          {
            id:5,
            name: "张三",
            age: 19
          },
          {
            id:6,
            name: "李四",
            age: 25
          }
        ]
      },
      pageData: {
        total: 0
      },
      selectOptions:[]
    };
  },
  components: {
    search,
    tableComp,
    pagination
  },
  created() {
    this.pageData.total = this.tableObj.tableData.length;
    
  },
  methods:{
    getSelect(){
      this.selectOptions = this.$refs.tableRef.selectOptions
      console.log(this.selectOptions )
    }
  }
};
</script>

<style scoped>
</style>