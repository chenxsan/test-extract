module.exports = {
  use: [
    ['@neutrinojs/react-components', {
      manifest: {}
    }],
    ['@neutrinojs/style-loader', {
      loaders: [
        'postcss-loader'
      ],
      extract: false
    }]
  ]
};
