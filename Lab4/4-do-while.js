'use strict';

const sum = (...args) => {
  let value = 0;
   do {
    value += args.pop();
   } while (args.length > 1);
   
   return value;
};

console.log(sum(42,8,50));
