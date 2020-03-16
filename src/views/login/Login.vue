<template>
  <div>
      <button @click="login">登录</button>
  </div>
</template>

<script>
export default {
  name :'login',
  methods:{
      login(){
          this.$router.replace('/home')
      }
  }
};
</script>

<style scoped>

</style>