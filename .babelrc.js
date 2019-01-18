const env = process.env.BABEL_ENV;

const runtimeOptions =
  env === 'esm' ? { useESModules: true } : { useESModules: false };

const presets = [...(env == 'esm' ? [] : ['@babel/preset-env'])];
const plugins = [
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-transform-react-jsx',
  '@babel/plugin-proposal-object-rest-spread',
  ['@babel/plugin-transform-runtime', runtimeOptions],
];

module.exports = {
  plugins,
  presets,
};
