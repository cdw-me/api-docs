<template>
  <div class="home">
    <router-link to="/edit">edit</router-link>
    <router-link to="/look">look</router-link>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {}
};
</script>

<style lang="less" scoped>
.home {
  padding: 10% 20%;
  a {
    display: block;
  }
}
</style>
