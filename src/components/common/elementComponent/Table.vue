//element-ui 表格组件封装
<template>
  <el-table
    ref="multipleTable"
    :data="tableObj.tableData"
    style="width: 100%"
    :stripe="tableObj.stripe"
    :border="tableObj.border"
    :max-height="tableObj.height"
    @selection-change="handleSelectionChange"
    @row-click="handleRowClick"
    size="small"
  >
    <el-table-column v-if="tableObj.selection" type="selection" width="55"></el-table-column>
    <el-table-column
      :prop="item.prop"
      :label="item.label"
      :sortable="item.sortable"
      v-for="(item,index) in tableObj.tableTitle"
      :key="index"
    ></el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "Table",
  data() {
    return {
      selectOptions: ""
    };
  },
  methods: {
    //获取多选按钮选中的数据
    handleSelectionChange(val) {
      this.selectOptions = val;
    },
    //点击行触发，选中或不选中复选框
    handleRowClick(row) {
      this.$refs.multipleTable.toggleRowSelection(row);
    },
  },
  props: {
    tableObj: {
      type: Object,
      default() {
        return {
          stripe: false,
          border: false,
          height: "500px",
          selection: false,
          tableTitle: {
            prop: "",
            label: "",
            sortable: false
          }
        };
      }
    }
  }
};
</script>

<style scoped>
/* .el-table {
  margin-top: 10px;
  margin-bottom: 10px;
} */
</style>