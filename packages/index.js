import XIcon from './components/icon/index.js';
import Message from './components/message/index.js';
import './style/fonts/iconfont.js';

const components = [
  XIcon
];

// 定义install方法，注册所有组件
const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });

  Vue.prototype.$Message = Message;
};

// 判断是否直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  XIcon
};
