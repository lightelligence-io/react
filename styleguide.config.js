const path = require('path');
const pkg = require('./package.json');

module.exports = {
  serverPort: 5050,
  pagePerSection: true,
  styleguideDir: 'docs',
  title: 'Lightelligence React',
  version: pkg.version,
  logger: {
    warn: (message) => {
      const ignore =
        message.indexOf(
          `src/content/CardTable/CardTableContent.js matches a pattern defined in “components” or “sections” options in your style guide`,
        ) > -1 ||
        message.indexOf(
          `src/content/Fonts/Fonts.js matches a pattern defined in “components” or “sections” options in your style guide`,
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
      content: 'src/introduction/index.md',
      sectionDepth: 2,
      sections: [
        {
          name: 'Basics',
          content: 'src/introduction/basics.md',
        },
        {
          name: 'Variables',
          content: 'src/introduction/variables.md',
        },
      ],
    },
    {
      name: 'Components',
      components: 'src/components/**/[A-Z]*.js', // exclude index.js files
      // https://react-styleguidist.js.org/docs/components.html#finding-components
      // href: false, -> https://github.com/styleguidist/react-styleguidist/issues/1145
      sectionDepth: 2,
    },
    {
      name: 'Content',
      components: 'src/content/**/[A-Z]*.js', // exclude index.js files
      sectionDepth: 2,
    },
    {
      name: 'Controls',
      components: 'src/controls/**/[A-Z]*.js', // exclude index.js files
      sectionDepth: 2,
    },
    {
      name: 'Layout',
      components: 'src/layout/**/[A-Z]*.js', // exclude index.js files
      sectionDepth: 2,
    },
    {
      name: 'Navigation',
      components: 'src/navigation/**/[A-Z]*.js',
      sectionDepth: 2,
    },
    {
      name: 'Hooks',
      components: 'src/hooks/**/[A-Z]*.js', // exclude index.js files
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
  exampleMode: 'collapse',
  usageMode: 'collapse',
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
    Wrapper: path.join(__dirname, 'styleguide/Frame'),
    Logo: path.join(__dirname, 'styleguide/Logo'),
    VersionDropdown: path.join(__dirname, 'styleguide/VersionDropdown'),
    StyleGuideRenderer: path.join(__dirname, 'styleguide/StyleGuide'),
    TableOfContentsRenderer: path.join(
      __dirname,
      'styleguide/TableOfContents.js',
    ),
    ComponentsListRenderer: path.join(__dirname, 'styleguide/ComponentsList'),
    SectionHeadingRenderer: path.join(__dirname, 'styleguide/SectionHeading'),
    HeadingRenderer: path.join(__dirname, 'styleguide/Heading'),
    ParaRenderer: path.join(__dirname, 'styleguide/Para'),
    'Markdown/Pre': path.join(__dirname, 'styleguide/Markdown/Pre'),
    Table: path.join(__dirname, 'styleguide/Table'),
    PathlineRenderer: path.join(__dirname, 'styleguide/Pathline'),
    ReactComponentRenderer: path.join(__dirname, 'styleguide/ReactComponent'),
    TabButtonRenderer: path.join(__dirname, 'styleguide/TabButton'),
    PlaygroundRenderer: path.join(__dirname, 'styleguide/Playground'),
    CodeRenderer: path.join(__dirname, 'styleguide/Code'),
  },
  require: [
    path.join(__dirname, 'node_modules/normalize.css'),
    path.join(__dirname, 'node_modules/@lightelligence/styles/dist/index.css'),
  ],
};
