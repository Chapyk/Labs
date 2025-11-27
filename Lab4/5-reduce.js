'use strict';

const sum = (...args) => args.reduce((x, y) => x + y, 0);

console.log(sum(42,8,50));