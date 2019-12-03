<template>
  <div class="title" :class="'h' + level">
    <div v-if="!isEdit" @click="isEdit = true">{{ value }}</div>
    <i-input
      v-if="isEdit"
      :value="value"
      @input="onInput"
      @enter="isEdit = false"
    />
  </div>
</template>

<script>
import IInput from './IInput.vue';
export default {
  name: 'i-title',
  props: {
    level: Number,
    value: String
  },
  components: {
    IInput
  },
  data() {
    return {
      isEdit: false
    };
  },
  methods: {
    onInput: function(value) {
      this.$emit('input', value);
    }
  }
};
</script>

<style lang="less">
.h1 {
  font-size: 2em;
}
.h2 {
  font-size: 1.5em;
}
.h3 {
  font-size: 1.17em;
}
.h4 {
  font-size: 1em;
}
.h5 {
  font-size: 0.83em;
}
.h6 {
  font-size: 0.67em;
}
</style>
