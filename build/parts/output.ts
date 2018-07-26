'use strict';

// +-------+-------------------------------------------------------------------+
// | Title | Webpack utils                                                     |
// +-------+-------------------------------------------------------------------+

import { log, resolve } from '../modules/utils';

// +-------+-------------------------------------------------------------------+
// | Title | Webpack configs                                                   |
// +-------+-------------------------------------------------------------------+

const config = ({ path, filename }: any) => (
  log({
    prop: path,
    msg: 'The "path" property in "output.ts" was changed!',
  }),
  log({
    prop: filename,
    msg: 'The "filename" property in "output.ts" was changed!',
  }),

  {
    output: {
      path: path || resolve({ dir: 'dist' }),
      filename: filename || 'js/[name].js',
    },
  }
);

export default config;
