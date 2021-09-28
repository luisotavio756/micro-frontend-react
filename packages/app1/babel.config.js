module.exports = {
  "plugins": [
    "@babel/plugin-proposal-class-properties",
    [
      "@babel/plugin-transform-runtime",
      {
        "regenerator": true
      }
    ]
  ],
  presets: [
    '@babel/preset-env',
    [
      '@babel/preset-react',
      {
        runtime: 'automatic'
      }
    ]
  ]
};
