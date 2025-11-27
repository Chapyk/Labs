'use strict';

const max = (matrix) => {
 return Math.max(...matrix.flat());
};

console.log(max([[1,86,69],[92,42,52],[67, 143,0]]));