'use strict';

// +-------+-------------------------------------------------------------------+
// | Title | Webpack utils                                                     |
// +-------+-------------------------------------------------------------------+

import { Configuration } from 'webpack';

import merge from 'webpack-merge';

// +-------+-------------------------------------------------------------------+
// | Title | Webpack parts                                                     |
// +-------+-------------------------------------------------------------------+

import output from '../parts/output';

// +-------+-------------------------------------------------------------------+
// | Title | Webpack configs                                                   |
// +-------+-------------------------------------------------------------------+

import DotenvWebpack from '../parts/plugins/DotenvWebpack';

const plugins: Configuration = merge(
  DotenvWebpack,
);

import commonConfig from './webpack.config.common';

const productionConfig: Configuration = merge(
  output({}),
  plugins,
);

const config: Configuration = merge( commonConfig, productionConfig );

export default config;
