import XPopper from './src/index.vue';

// 为组件提供 install 安装方法，供按需引入
XPopper.install = function(Vue) {
  Vue.component(XPopper.name, XPopper);
};

export default XPopper;
