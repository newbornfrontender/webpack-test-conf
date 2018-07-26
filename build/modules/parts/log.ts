'use strict';

import chalk from 'chalk';

const env = process.env.NODE_ENV;

const getConsoleLog = {
  mode: () => {
    if (env === undefined) {
      return console.log(chalk.red(
        'Oops! Something went wrong. Mode are undefined. ' +
        'Webpack running in "development" mode!'
      ));
    };

    return console.log(chalk.green(`Webpack running in "${env}" mode!`));
  },

  props: ({ prop, msg }: any) => {
    if (prop !== undefined) {
      return console.log(chalk.blue(msg));
    };
  },
};

export { getConsoleLog };
