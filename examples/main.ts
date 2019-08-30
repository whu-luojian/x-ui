import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import DemoBlock from './components/DemoBlock.vue';

Vue.component('demo-block', DemoBlock);
Vue.config.productionTip = false;
Vue.prototype.$icon = ['test', 'success'];

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
