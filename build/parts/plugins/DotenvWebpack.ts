'use strict';

// +-------+-------------------------------------------------------------------+
// | Title | Imports                                                           |
// +-------+-------------------------------------------------------------------+

// Utils
// -----------------------------------------------------------------------------

// Webpack utils

import { Configuration } from 'webpack';

// Config utils

import { resolvePath } from '../../modules/utils';

// Webpack plugins
// -----------------------------------------------------------------------------

import DotenvWebpack from 'dotenv-webpack';

// +-------+-------------------------------------------------------------------+
// | Title | Webpack configs                                                   |
// +-------+-------------------------------------------------------------------+

const config: Configuration = {
  plugins: [
    new DotenvWebpack({
      path: resolvePath({ dir: '.env' }),
      safe: false,
      systemvars: true,
      silent: false,
    }),
  ],
};

export default config;
