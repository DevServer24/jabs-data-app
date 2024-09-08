
const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.css', '.scss'], // Include .css and .scss
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/, // Handle CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/, // Handle SCSS files if needed
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  mode: 'development',
};
