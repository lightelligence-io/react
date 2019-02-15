const path = require('path');
const webpackConfig = require('./webpack.styleguide.config.js');

function getVersion() {
  return process.env['BITBUCKET_TAG'] || require('./package.json').version;
}

module.exports = {
  serverPort: 5050,
  pagePerSection: true,
  styleguideDir: 'docs',
  version: getVersion(),
  sections: [
    {
      name: 'Introduction',
      content: 'src/index.md',
    },
    {
      name: 'Components',
      components: 'src/**/[A-Z]*.js',
      sectionDepth: 2,
    },
  ],
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.js');
    return `import {${name}} from '@lightelligence/react';`;
  },
  exampleMode: 'expand',
  usageMode: 'expand',
  ignore: ['src/**/[A-Z]*.test.js'],
  webpackConfig,
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/layout/Frame/Frame'),
  },
  require: [
    path.join(__dirname, 'node_modules/normalize.css'),
    path.join(
      __dirname,
      'node_modules/@lightelligence/lightelligence-ui/dist/index.css',
    ),
  ],
};
