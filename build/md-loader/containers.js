/**
 * 自定义内容块demo
 * ::: demo
 * ...
 * :::
 */
const Container = require('markdown-it-container');

module.exports = md => {
  md.use(Container, 'demo', {
    validate(params) {
      return params.trim().match(/^demo\s*(.*)$/);
    },
    render(tokens, idx) {
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
      if (tokens[idx].nesting === 1) {
        const description = m && m.length > 1 ? m[1] : '';
        const content = tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : '';
        return `<demo-block>
        ${description ? `<div>${md.render(description)}</div>` : ''}
        <!--x-demo: ${content}:x-demo-->
        `;
      }
      return `</demo-block>`;
    }
  });
};
