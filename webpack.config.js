import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export const mode = 'development';
export const entry = resolve(__dirname, 'src', 'index.js');
export const output = {
  // the output of the webpack build will be in /dist directory
  path: resolve(__dirname, 'dist'),
  // the filename of the JS bundle will be bundle.js
  filename: 'bundle.js'
};
export const module = {
  rules: [
    {
      // for any file with a suffix of js or jsx
      test: /\.jsx?$/,
      // ignore transpiling JavaScript from node_modules as it should be that state
      exclude: /node_modules/,
      // use the babel-loader for transpiling JavaScript to a suitable format
      loader: 'babel-loader',
      options: {
        // attach the presets to the loader (most projects use .babelrc file instead)
        presets: ['@babel/preset-env', '@babel/preset-react']
      }
    }
  ]
};
export const plugins = [new HtmlWebpackPlugin({ template: resolve(__dirname, 'src', 'index.html') })];