<template>
  <div>
      <breadcrumb :breadList="breadList"></breadcrumb>
  </div>
</template>

<script>

export default {
  name :'LoginLog',
  data(){
    return {
      breadList:['首页','系统管理','登录日志']
    }
  },
  components:{
  }
};
</script>

<style scoped>

</style>