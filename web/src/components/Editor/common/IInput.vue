<template>
  <div class="i-input">
    <input ref="input" type="text" :value="value" @input="onInput" @keyup.enter="onEnter" @blur="onBlur" />
  </div>
</template>

<script>
export default {
  name: 'i-input',
  props: {
    value: String
  },
  data() {
    return {};
  },
  mounted: function() {
    this.$refs.input.focus();
  },
  methods: {
    onInput: function($event) {
      
    },
    onEnter: function($event) {
      this.$emit('input', $event.target.value);
      this.$emit('enter');
    },
    onBlur: function($event) {
      this.value == $event.target.value && this.$emit('enter');
    }
  }
};
</script>
