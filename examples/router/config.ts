interface RouterConfig {
  [k:string]: Array<Object>
}

const config: RouterConfig = {
  开发指南: [
    {
      name: 'introduce',
      path: '/introduce',
      desc: '介绍'
    },
    {
      name: 'start',
      path: '/start',
      desc: '快速上手'
    },
    {
      name: 'contribute',
      path: '/contribute',
      desc: '贡献'
    }
  ],
  组件: [
    {
      name: 'icon',
      path: '/icon',
      desc: 'Icon 图标'
    },
    {
      name: 'message',
      path: '/message',
      desc: 'Message 消息提示'
    },
    {
      name: 'popper',
      path: '/popper',
      desc: 'Popper容器'
    }
  ]
};

export default config;
