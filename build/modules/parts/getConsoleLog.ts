'use strict';

import chalk from 'chalk';

const env = process.env.NODE_ENV;

const getConsoleLog = {
  modeLog: () => {
    if (env === undefined) {
      return console.log(chalk.red(
        'Oops! Something went wrong. Mode are undefined. ' +
        'Webpack running in "development" mode!'
      ));
    };

    return console.log(chalk.green(`Webpack running in "${env}" mode!`));
  },

  /**
   * Example JSDoc
   *
   * @param {any} prop Example description
   * @param {any} msg Example description
   * @returns {void}
   */

  propsLog: ({ prop, msg }: any): void => {
    if (prop !== undefined) {
      return console.log(chalk.blue(msg));
    };
  },
};

export { getConsoleLog };
