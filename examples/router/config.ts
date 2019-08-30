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
    }
  ]
};

export default config;
