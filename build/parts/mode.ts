'use strict';

// +-------+-------------------------------------------------------------------+
// | Title | Webpack utils                                                     |
// +-------+-------------------------------------------------------------------+

import { log } from '../modules/utils';

// +-------+-------------------------------------------------------------------+
// | Title | Webpack configs                                                   |
// +-------+-------------------------------------------------------------------+

const env = process.env.NODE_ENV;

const config = ({ mode }: any) => (
  log.mode(),

  log.props({
    prop: mode,
    msg: 'The "mode" property in "mode.ts" was changed!',
  }),

  {
    mode: mode || env || 'development',
  }
)

export default config;
