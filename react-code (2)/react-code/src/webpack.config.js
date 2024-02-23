
// webpack installation command
// npm install webpack webpack-cli --save-dev

// webpack.config.js: under root
const path = require('path');

module.exports = {
  // other webpack configuration...
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

