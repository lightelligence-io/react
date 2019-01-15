const path = require('path');
const webpackConfig = require('./webpack.styleguide.config.js');

module.exports = {
  serverPort: 5050,
  pagePerSection: true,
  // TODO: Don't let us show sub-components inadvertently, see: https://react-styleguidist.js.org/docs/cookbook.html#how-to-hide-some-components-in-style-guide-but-make-them-available-in-examples
  // skipComponentsWithoutExample: true,
  sections: [
    {
      name: 'Components',
      components: 'src/**/[A-Z]*.js',
      sectionDepth: 2,
    },
  ],
  ignore: ['src/**/[A-Z]*.test.js'],
  webpackConfig,
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/layout/Frame/Frame'),
  },
  require: [
    path.join(__dirname, 'node_modules/normalize.css'),
    path.join(
      __dirname,
      'node_modules/@lightelligence/lightelligence-ui/src/index.scss',
    ),
    // path.join(__dirname, 'node_modules/lightelligence-ui/source/style/framework.scss'),
    // 'material-design-icons-iconfont/dist/material-design-icons.css',
    // path.join(__dirname, 'src/styleguide/index.scss'),
    // 'material-design-icons-iconfont',
    // path.join(__dirname, 'styleguide/style.scss'),
  ],
};
