<template>
  <header class="x-header">
    <span class="x-title" @click="click">X UI</span>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
let i = 1;
@Component
export default class TheHeader extends Vue {
  private click() {
    this.$Message({
      type: 'success',
      content: `测试测试${i++}`,
      duration: 0,
      closable: true
    });
  }
}
</script>

<style lang="scss" scoped>
.x-header {
  .x-title {
    font-size: 28px;
    font-weight: bold;
    background: linear-gradient(to right, red, #0075FF);
    background-clip: text;
    color: transparent;
    cursor: pointer;
  }
}
</style>
