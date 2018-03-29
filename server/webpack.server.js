const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  // говорим webpack, что мы строим пакет для NodeJS,
  // а не для браузера
  target: 'node',
  // точка входа в проект
  entry: './src/index.js',
  // куда поместить выходной файл, который сгенерирован
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
