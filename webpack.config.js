const path = require('path');
const fs = require('fs');
const loaderUtils = require('loader-utils');

const baseConfig = (env) => ({
  entry: './src/index.js',
  // Don't bundle react or react-dom
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
    'react-router-dom': {
      commonjs: 'react-router-dom',
      commonjs2: 'react-router-dom',
      amd: 'ReactRouterDOM',
      root: 'ReactRouterDOM',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM',
    },
    'prop-types': {
      commonjs: 'prop-types',
      commonjs2: 'prop-types',
      amd: 'PropTypes',
      root: 'PropTypes',
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
              {
                loader: 'isomorphic-style-loader',
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                },
              },
            ],
          },
          // "scss" loader applies to compile scss to css.
          // "postcss" loader applies autoprefixer to our CSS.
          // "css" loader resolves paths in CSS and adds assets as dependencies.
          // "style" loader turns CSS into JS modules that inject <style> tags.
          // In production, we use a plugin to extract that CSS to a file, but
          // in development "style" loader enables hot editing of CSS.
          {
            test: /\.scss$/,
            use: [
              require.resolve('isomorphic-style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 1,
                  // localIdentName: '[name]__[local]___[hash:base64:5]',
                  modules: true,
                  // we need load the framework (scss) without
                  getLocalIdent: (
                    loaderContext,
                    localIdentName,
                    localName,
                    options,
                  ) => {
                    // don't apply css modules transformation for the node_modules folder

                    const relPath = path.relative(
                      loaderContext.context,
                      loaderContext.resource,
                    );

                    if (
                      relPath.indexOf('node_modules') === 0 ||
                      relPath.indexOf('lightelligence-ui/src/index.scss') === 0 // NOTE: Do we need this?
                    ) {
                      return localName;
                    }

                    const content = fs.readFileSync(
                      loaderContext.resourcePath,
                      'utf8',
                    );
                    const n = loaderUtils.interpolateName(
                      loaderContext,
                      `[name]__${localName}___[hash:base64:5]`,
                      { ...options, content: content },
                    );
                    return n;
                  },
                },
              },
              {
                loader: require.resolve('postcss-loader'),
              },
              {
                loader: require.resolve('sass-loader'),
                options: {
                  includePaths: [path.join(__dirname, 'node_modules')],
                },
              },
            ],
          },

          {
            test: /\.svg/,
            use: {
              loader: 'svg-url-loader',
              options: {},
            },
          },
          // "file" loader makes sure those assets get served by WebpackDevServer.
          // When you `import` an asset, you get its (virtual) filename.
          // In production, they would get copied to the `build` folder.
          // This loader doesn't use a "test" so it will catch all modules
          // that fall through the other loaders.
          {
            // Exclude `js` files to keep "css" loader working as it injects
            // its runtime that would otherwise processed through "file" loader.
            // Also exclude `html` and `json` extensions so they get processed
            // by webpacks internal loaders.
            exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
            loader: require.resolve('file-loader'),
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
        ],
      },

      // ** STOP ** Are you adding a new loader?
      // Make sure to add the new loader(s) before the "file" loader.
    ],
  },
});

const outputCommon = {
  // workaround for 'window is not defined' see https://github.com/webpack/webpack/issues/6522
  globalObject: `typeof self !== 'undefined' ? self : this`,
  path: path.resolve(__dirname, 'dist'),
};

const configDev = {
  ...baseConfig('development'),
  devtool: 'source-map',
  mode: 'development',
  target: 'web',
  output: {
    ...outputCommon,
    filename: 'bundle.umd.js',
    library: 'lightelligence-react',
    libraryTarget: 'umd',
    // umdNamedDefine: true,
  },
};

const configProd = {
  ...baseConfig('production'),
  mode: 'production',
  target: 'web',
  output: {
    ...outputCommon,
    filename: 'bundle.umd.min.js',
    library: 'lightelligence-react',
    libraryTarget: 'umd',
    // umdNamedDefine: true,
  },
};

module.exports = [configDev, configProd];
