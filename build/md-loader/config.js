const Config = require('markdown-it-chain');
const config = new Config();
const containers = require('./containers');
const overWriteFenceRule = require('./fence');

config
  .options
  .html(true)
  .end()
  .plugin('containers')
  .use(containers)
  .end();

const md = config.toMd();
overWriteFenceRule(md);

module.exports = md;
