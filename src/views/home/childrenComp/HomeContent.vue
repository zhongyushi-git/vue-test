<template>
  <div class="content">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "HomeContent"
};
</script>

<style scoped>
.content {
  height: 87vh;
  width: 85%;
  border-left: solid #faf0e6 0.5px;
  padding: 10px;
}
</style>