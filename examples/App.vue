<template>
  <div id="app">
    <div class="app-header">
      <TheHeader/>
    </div>
    <div class="app-main">
      <div class="main-sidebar">
        <TheSideBar/>
      </div>
      <div class="main-content">
        <router-view></router-view>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TheHeader from '@/components/TheHeader.vue';
import TheSideBar from '@/components/TheSideBar.vue';

@Component({
  components: {
    TheHeader,
    TheSideBar
  }
})
export default class App extends Vue {
  private click() {
    this.$refs.popper.hide();
  }
}
</script>

<style lang="scss">
@import './style/index.scss';

#app {
  height: 100%;
  display: flex;
  flex-direction: column;
  .app-header {
    height: 80px;
    line-height: 80px;
    padding: 0 80px;
    border-bottom: 1px solid $border-color;
  }
  .app-main {
    flex: 1;
    height: 0;
    display: flex;
    .main-sidebar {
      box-sizing: border-box;
      width: 300px;
      padding-bottom: 20px;
      overflow-y: auto;
    }
    .main-content {
      flex: 1;
      overflow-y: auto;
      padding: 20px;
    }
  }
}
</style>
