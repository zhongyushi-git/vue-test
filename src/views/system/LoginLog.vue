<template>
  <div>
      <breadcrumb :breadList="breadList"></breadcrumb>
  </div>
</template>

<script>
import breadcrumb from 'components/common/elementComponent/Breadcrumb'
export default {
  name :'LoginLog',
  data(){
    return {
      breadList:['首页','系统管理','登录日志']
    }
  },
  components:{
    breadcrumb
  }
};
</script>

<style scoped>

</style>