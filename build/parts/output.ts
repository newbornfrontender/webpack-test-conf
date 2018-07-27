'use strict';

// +-------+-------------------------------------------------------------------+
// | Title | Imports                                                           |
// +-------+-------------------------------------------------------------------+

// Config utils
// -----------------------------------------------------------------------------

import { consoleLog, resolvePath } from '../modules/utils';

// +-------+-------------------------------------------------------------------+
// | Title | Configs                                                           |
// +-------+-------------------------------------------------------------------+

// Part config
// -----------------------------------------------------------------------------

/**
 * Webpack output part
 *
 * @param {any} path - Output path
 * @param {any} filename - Output filename
 */

// const config = ({ path, filename }: any): {} => (
const config = ({ path, filename }: any): {} => (
  consoleLog.propsLog({
    prop: path,
    msg: 'The "path" property in "output.ts" was changed!',
  }),
  consoleLog.propsLog({
    prop: filename,
    msg: 'The "filename" property in "output.ts" was changed!',
  }),

  {
    output: {
      path: path || resolvePath({ dir: 'dist' }),
      filename: filename || 'js/[name].js',
    },
  }
);

// +-------+-------------------------------------------------------------------+
// | Title | Exports                                                           |
// +-------+-------------------------------------------------------------------+

// Part config
// -----------------------------------------------------------------------------

export default config;
