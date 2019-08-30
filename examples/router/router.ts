import Vue from 'vue';
import Router from 'vue-router';
import config from './config';
import hljs from 'highlight.js';

Vue.use(Router);

let routes: any = [{
  path: '/',
  redirect: {
    name: 'introduce'
  }
}];

Object.keys(config).forEach((key: string) => {
  routes = routes.concat(config[key]);
});

routes.forEach((route: { name: any; component: (r: any) => void; }) => {
  if (route.name) {
    /* eslint-disable no-param-reassign */
    /* eslint-disable global-require */
    /* eslint-disable import/no-dynamic-require */
    route.component = r => require.ensure([], () => r(require(`../docs/${route.name}.md`)));
  }
});

const router = new Router({
  routes
});

// 节点动态生成后代码高亮
router.afterEach(() => {
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)');
    Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  });
});

export default router;
