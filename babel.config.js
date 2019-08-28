const env = process.env.BABEL_ENV;

if (typeof env === 'undefined') {
  // test runner or styleguidist
  module.exports = {
    presets: ['@babel/preset-env'],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/plugin-transform-react-jsx',
      '@babel/plugin-transform-runtime',
    ],
    sourceMaps: true,
  };
  return;
}

// the following configurations are for the commonjs and esm distributions

const isEsm = env === 'esm';

const runtimeOptions = isEsm ? { useEsModules: true } : { useEsModules: false };

const presets = isEsm
  ? []
  : [
      [
        '@babel/preset-env',
        {
          useBuiltIns: false,
          targets: { esmodules: isEsm },
        },
      ],
    ];

const plugins = [
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-proposal-object-rest-spread',
  '@babel/plugin-transform-react-jsx',
  ['@babel/plugin-transform-runtime', runtimeOptions],
];

module.exports = {
  plugins,
  presets,
};
