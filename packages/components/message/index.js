import Notification from './src/index.js';

const defaults = {
  top: 24,
  duration: 1.5
};

const prefixKey = 'xui_message_key_';
let name = 1;
let messageInstance;

function getMessageInstance(props) {
  messageInstance = messageInstance || Notification.newInstance(props);
  return messageInstance;
}

function getUuid() {
  return `${prefixKey}${name++}`;
}

const Message = (options) => {
  if (typeof options === 'string') {
    options = {
      content: options
    };
  }
  let uuid = getUuid();
  options = Object.assign({
    duration: defaults.duration
  }, options, {
    name: uuid
  });

  let instance = getMessageInstance({
    styles: {
      top: `${defaults.top}px`
    }
  });
  instance.add(options);

  // 用于手动消除
  return {
    remove() {
      instance.remove(uuid);
    }
  };
};

Message.config = (options) => {
  if (options.top || options.top === 0) {
    defaults.top = options.top;
  }
  if (options.duration || options.duration === 0) {
    defaults.duration = options.duration;
  }
};

export default Message;
