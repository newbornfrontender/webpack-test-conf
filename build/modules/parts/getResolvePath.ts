'use strict';

import path from 'path';

/**
 * Example JSDoc
 *
 * @param {any} deep Example description
 * @param {any} dir Example description
 * @returns {string}
 */

const getResolvePath = ({ deep, dir }: any): string => {
  deep = deep || '../../..';

  return path.resolve(__dirname, deep, dir);
};

export { getResolvePath };
