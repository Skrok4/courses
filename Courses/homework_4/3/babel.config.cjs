module.exports = {
  presets: [['@babel/preset-env', { targets: { node: 'current' } }], ['babel-preset-expo']],
  assumptions: {
    setSpreadProperties: true,
    iterableIsArray: true,
    arrayLikeIsIterable: true,
  },
  plugins: [
    ['@babel/plugin-proposal-object-rest-spread', { useBuiltIns: true }],
    ['@babel/plugin-transform-spread', {
      loose: true,
    }],
    "@babel/plugin-transform-runtime",
  ]
};