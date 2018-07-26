'use strict';

// +-------+-------------------------------------------------------------------+
// | Title | Webpack utils                                                     |
// +-------+-------------------------------------------------------------------+

import webpack from 'webpack';

import { resolve } from '../../modules/utils';

// +-------+-------------------------------------------------------------------+
// | Title | Webpack plugins                                                   |
// +-------+-------------------------------------------------------------------+

import DotenvWebpack from 'dotenv-webpack';

// +-------+-------------------------------------------------------------------+
// | Title | Webpack configs                                                   |
// +-------+-------------------------------------------------------------------+

const config: webpack.Configuration = {
  plugins: [
    new DotenvWebpack({
      path: resolve({ dir: '.env' }),
      safe: false,
      systemvars: true,
      silent: false,
    }),
  ],
};

export default config;
