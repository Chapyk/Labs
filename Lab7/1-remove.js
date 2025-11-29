'use strict';

const removeElement = (array, item) => {
  const index = array.indexOf(item);
  if (index !== -1) {
    array.splice(index, 1);
  }
};

const arr = [1, 2, 3, 4];
removeElement(arr, 3);
console.log(arr);

