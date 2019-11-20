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
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  background-color: #f2f5f4;
}
::-webkit-scrollbar-thumb {
  background-color: #d6dfdd;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover{
    background-color: #b1b9b7;
}
::-webkit-scrollbar-track {
    border-radius: 4px;
    background-color: #f2f5f4;
}
</style>
