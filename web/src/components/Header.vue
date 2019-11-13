<template>
  <div class="header">
    <a-icon type="home" :style="{ fontSize: '20px' }" />
    <a-input-search @search="onSearch" addonBefore="React" enterButton />
    <span class="blank-space"></span>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    onSearch: function() {
      console.log('search');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  .anticon {
    width: 50px;
  }
  .ant-input-search {
    width: 60%;
  }
  .blank-space {
    width: 50px;
    height: 100%;
  }
}
</style>

<style lang="scss">
.header {
  .ant-input-search {
    .ant-input-affix-wrapper {
      .ant-input {
        padding-right: 56px;
      }
      .ant-input-suffix {
        right: 0
      }
    }
  }
}
</style>