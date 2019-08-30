const path = require('path');

module.exports = {
  publicPath: './',
  productionSourceMap: false,
  css: {
    loaderOptions: {
      // 配置sass的全局变量
      sass: {
        data: `@import "@/style/variable.scss";`
      }
    }
  },
  pages: {
    index: {
      entry: 'examples/main.ts',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'examples')
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('md')
      .test(/\.md/)
      .use('vue')
      .loader('vue-loader')
      .end()
      .use('markdown')
      .loader('./build/md-loader/index.js');
  }
};
