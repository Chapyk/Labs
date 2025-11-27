'use strict';

const sum = (...args) => {
  let value = 0;
  for (let i of args) {
    value += i;
  }
  return value;
};

console.log(sum(42,8,50));
