'use strict';

// +-------+-------------------------------------------------------------------+
// | Title | Webpack utils                                                     |
// +-------+-------------------------------------------------------------------+

import webpack from 'webpack';

// Plugins
// -----------------------------------------------------------------------------

import merge from 'webpack-merge';

// +-------+-------------------------------------------------------------------+
// | Title | Webpack parts                                                     |
// +-------+-------------------------------------------------------------------+

import mode from '../parts/mode';
import output from '../parts/output';

// +-------+-------------------------------------------------------------------+
// | Title | Webpack configs                                                   |
// +-------+-------------------------------------------------------------------+

import commonConfig from './webpack.config.common';

const productionConfig: webpack.Configuration = merge([
  mode,
  output({}),
]);

const config: webpack.Configuration = merge([
  commonConfig, productionConfig,
]);

export default config;
