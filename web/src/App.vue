<template>
  <a-locale-provider :locale="zh_CN">
    <div id="app">
      <header />
      <router-view />
    </div>
  </a-locale-provider>
</template>

<script>
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN';
import Header from './components/Header';

export default {
  name: 'app',
  data() {
    return {
      zh_CN
    };
  },
  components: {
    Header
  }
};
</script>

<style>
#app {
  height: 100%;
}
</style>
