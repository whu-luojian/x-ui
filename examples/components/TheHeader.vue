<template>
  <header class="x-header">
    <span class="x-title">X UI</span>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TheHeader extends Vue {

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
