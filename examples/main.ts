import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import DemoBlock from './components/DemoBlock.vue';
import icons from './assets/icon';
import XUi from '../packages/index.js';
import '../packages/style/index.scss';

Vue.component('demo-block', DemoBlock);
Vue.use(XUi);
Vue.config.productionTip = false;
Vue.prototype.$icon = icons;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
