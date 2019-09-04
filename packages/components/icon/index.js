import XIcon from './src/icon.vue';

// 为组件提供 install 安装方法，供按需引入
XIcon.install = function(Vue) {
  Vue.component(XIcon.name, XIcon);
};

export default XIcon;
