<template>
  <div class="search">
    <el-row>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-form label-width="80px" @submit.prevent>
            <el-form-item label="姓名">
              <el-input v-model="form.name" size="small"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
      <el-col :span="6">
        <div>
          <el-form label-width="80px" @submit.prevent>
            <el-form-item label="年龄">
              <el-input v-model.number="form.age" size="small"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
      <el-col :span="6">
           <el-form label-width="10px" @submit.prevent>
            <el-form-item label="">
              <el-button @click="query" type="primary" size="small">查询</el-button>
            </el-form-item>
          </el-form>
        
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "UserSearch",
  data() {
    return {
      form: {
        name: "",
        age: 0
      }
    };
  },
  methods: {
    query() {
      console.log(this.form);
    }
  }
};
</script>

<style scoped>
.search {
  margin: 10px;
  margin-bottom: 0;
}
</style>