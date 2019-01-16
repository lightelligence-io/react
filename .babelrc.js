const env = process.env.BABEL_ENV;

const runtimeOptions =
  env === 'esm' ? { useEsModules: true } : { useEsModules: false };

const presets = [];
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
