'use strict';

const removeElements = (array, ...items) => {
  for (const item of items) {
    let index;
    while ((index = array.indexOf(item)) !== -1) {
      array.splice(index, 1);
    }
  }
};

const arr = [1, 2, 3, 2, 4, 3, 5];
removeElements(arr, 2, 3);
console.log(arr); 