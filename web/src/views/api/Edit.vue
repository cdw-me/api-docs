<template>
  <a-layout>
    <a-layout-header>智能会议系统 API</a-layout-header>
    <a-layout>
      <a-layout-sider :width="300">
        <a-tree
          :treeData="treeData"
          :defaultExpandAll="true"
        />
      </a-layout-sider>
      <a-layout-content>
        <api-editor />
      </a-layout-content>
    </a-layout>
    <a-layout-footer>
      <a :href="fromLink" target="_bank">{{ fromLink }}</a>
    </a-layout-footer>
  </a-layout>
</template>

<script>
const treeData = [
  {
    title: '0-0',
    key: '0-0',
    children: [
      {
        title: '0-0-0',
        key: '0-0-0',
        children: [
          { title: '0-0-0-0', key: '0-0-0-0' },
          { title: '0-0-0-1', key: '0-0-0-1' },
          { title: '0-0-0-2', key: '0-0-0-2' },
        ],
      },
      {
        title: '0-0-1',
        key: '0-0-1',
        children: [
          { title: '0-0-1-0', key: '0-0-1-0' },
          { title: '0-0-1-1', key: '0-0-1-1' },
          { title: '0-0-1-2', key: '0-0-1-2' },
        ],
      },
      {
        title: '0-0-2',
        key: '0-0-2',
      },
    ],
  },
  {
    title: '0-1',
    key: '0-1',
    children: [
      { title: '0-1-0-0', key: '0-1-0-0' },
      { title: '0-1-0-1', key: '0-1-0-1' },
      { title: '0-1-0-2', key: '0-1-0-2' },
    ],
  },
  {
    title: '0-2',
    key: '0-2',
  },
];
import ApiEditor from '../../components/Editor/ApiEditor.vue';
export default {
  name: 'apiEdit',
  components: {
    ApiEditor
  },
  data() {
    return {
      fromLink: 'https://github.com/cdw-me/api-docs',
      treeData
    };
  },
  methods: {}
};
</script>

<style lang="less">
.ant-layout {
  height: 100%;
  .ant-layout-header {
    border-bottom: 1px solid rgba(0, 0, 0, 0.07);
    background: #fff;
    font-size: 16px;
    text-align: center;
  }
  .ant-layout-sider {
    border-right: 1px solid rgba(0, 0, 0, 0.07);
    background: #fff;
    .ant-layout-sider-children {
      overflow: overlay;
    }
  }
  .ant-layout-content {
    background: #fff;
  }
  .ant-layout-footer {
    padding: 10px;
    background: #fff;
    border-top: 1px solid rgba(0, 0, 0, 0.07);
    text-align: center;
  }
}
</style>
