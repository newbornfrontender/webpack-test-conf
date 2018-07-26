'use strict';

// +-------+-------------------------------------------------------------------+
// | Title | Webpack utils                                                     |
// +-------+-------------------------------------------------------------------+

import { log } from '../modules/utils';

// +-------+-------------------------------------------------------------------+
// | Title | Webpack configs                                                   |
// +-------+-------------------------------------------------------------------+

const config = ({ entry }: any) => (
  log({
    prop: entry,
    msg: 'The "entry" property in "entry.ts" was changed!',
  }),

  {
    entry: entry || {
      index: './src/index.js',
      test: './src/test.js',
    },
  }
);

export default config;
