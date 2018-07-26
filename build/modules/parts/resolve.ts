'use strict';

import path from 'path';

const getResolvePath = ({ deep, dir }: any) => {
  deep = deep || '../../..';

  return path.resolve(__dirname, deep, dir);
};

export { getResolvePath };
