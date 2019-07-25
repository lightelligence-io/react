const path = require('path');
const pkg = require('./package.json');

module.exports = {
  serverPort: 5050,
  pagePerSection: true,
  styleguideDir: 'docs',
  version: pkg.version,
  logger: {
    warn: (message) => {
      const ignore =
        message.indexOf(
          `src/content/DataCards/DataCardsContent.js matches a pattern defined in “components” or “sections” options in your style guide`,
        ) > -1;
      if (!ignore) {
        // eslint-disable-next-line no-console
        console.warn(`${message}`);
      }
    },
  },
  sections: [
    {
      name: 'Introduction',
      content: 'src/index.md',
    },
    {
      name: 'Components',
      components: 'src/**/[A-Z]*.js', // exclude index.js files https://react-styleguidist.js.org/docs/components.html#finding-components
      sectionDepth: 2,
    },
  ],
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.js');
    return `import {${name}} from '@lightelligence/react';`;
  },
  skipComponentsWithoutExample: true,
  getExampleFilename(componentPath) {
    return componentPath.replace(/\.jsx?$/, '.md');
  },
  exampleMode: 'expand',
  usageMode: 'expand',
  ignore: ['src/**/[A-Z]*.test.js'],
  webpackConfig: {
    resolve: {
      alias: {
        '@lightelligence/react': path.resolve(__dirname, 'src/index.js'),
      },
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
          enforce: 'pre',
        },
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              sourceMaps: true,
              plugins: [
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-transform-react-jsx',
                '@babel/plugin-proposal-object-rest-spread',
                [
                  '@babel/plugin-transform-runtime',
                  {
                    corejs: false,
                    helpers: true,
                    regenerator: true,
                    useESModules: false,
                  },
                ],
              ],
            },
          },
        },
        {
          oneOf: [
            {
              test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
              loader: require.resolve('url-loader'),
              options: {
                limit: 10000,
                name: 'static/media/[name].[hash:8].[ext]',
              },
            },
            {
              test: /\.svg/,
              use: {
                loader: 'svg-url-loader',
                options: {},
              },
            },
            {
              test: /\.css$/,
              use: [
                require.resolve('style-loader'),
                require.resolve('css-loader'),
              ],
            },
            {
              exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
              loader: require.resolve('file-loader'),
              options: {
                name: 'static/media/[name].[hash:8].[ext]',
              },
            },
          ],
        },
      ],
    },
  },
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/layout/Frame/Frame'),
  },
  require: [
    path.join(__dirname, 'node_modules/normalize.css'),
    path.join(__dirname, 'node_modules/@lightelligence/styles/dist/index.css'),
  ],
};
