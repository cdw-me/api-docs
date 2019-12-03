<template>
  <div class="api-editor">
    <component
      :is="'i-' + item.type"
      v-for="(item, index) in list"
      :key="index"
      v-bind="item"
      v-model="item.value"
    ></component>
  </div>
</template>

<script>
import ITitle from './common/ITitle.vue';
import IContent from './common/IContent.vue';
export default {
  name: 'apiEditor',
  components: {
    ITitle,
    IContent
  },
  data() {
    return {
      list: [
        {
          type: 'title',
          level: 2,
          value: '用户登录'
        },
        {
          type: 'content',
          value: '用户登录接口'
        }
      ]
    };
  }
};
</script>

<style lang="less">
.api-editor {
  padding: 10px;
}
</style>
