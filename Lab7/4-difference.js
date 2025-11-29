'use strict';

const difference = (array1, array2) => {
  const result = [];
  for (const item of array1) {
    if (!array2.includes(item)) {
      result.push(item);
    }
  }
  return result;
};

console.log(difference([1, 2, 3, 4], [2, 4]))