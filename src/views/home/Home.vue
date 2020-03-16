<template>
  <div>
    <home-top />
    <div class="navAndContent">
      <home-nav />
      <home-content />
    </div>
  </div>
</template>

<script>
import HomeTop from "./childrenComp/HomeTop";
import HomeNav from "./childrenComp/HomeNav";
import HomeContent from "./childrenComp/HomeContent";
export default {
  name: "home",
  components: {
    HomeTop,
    HomeNav,
    HomeContent
  }
};
</script>

<style scoped>
.navAndContent {
  display: flex;
}
</style>