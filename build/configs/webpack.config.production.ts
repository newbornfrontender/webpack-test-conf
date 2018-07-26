'use strict';

// +-------+-------------------------------------------------------------------+
// | Title | Webpack utils                                                     |
// +-------+-------------------------------------------------------------------+

import webpack from 'webpack';

import merge from 'webpack-merge';

// +-------+-------------------------------------------------------------------+
// | Title | Webpack parts                                                     |
// +-------+-------------------------------------------------------------------+

import output from '../parts/output';

// +-------+-------------------------------------------------------------------+
// | Title | Webpack configs                                                   |
// +-------+-------------------------------------------------------------------+

import DotenvWebpack from '../parts/plugins/DotenvWebpack';

const plugins: webpack.Configuration = merge([
  DotenvWebpack,
]);

import commonConfig from './webpack.config.common';

const productionConfig: webpack.Configuration = merge([
  output({}),
  plugins,
]);

const config: webpack.Configuration = merge([ commonConfig, productionConfig ]);

export default config;
