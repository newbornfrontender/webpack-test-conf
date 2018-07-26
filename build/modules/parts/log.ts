'use strict';

import chalk from 'chalk';

const getConsoleLog = ({ prop, msg }: any) => {
  if (prop !== undefined) {
    return console.log(chalk.blue(msg));
  };
};

export { getConsoleLog };
