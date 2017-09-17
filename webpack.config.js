const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),  // path to client side JS folder
  entry: [  // app entry point
    './index.js',
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets:[ 'es2015', 'react', 'stage-2' ]
        }
      }
    ],
  },
  resolve: {  // where to look for import's or requires's, enables imports of npm packages
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
};
