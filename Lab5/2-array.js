'use strict';

const array = () => {
  const results = [];
  const get = (i) => results[i];
  get.push = (x) => results.push(x);
  get.pop = () => results.pop();
  return get;
};

console.log('Array test');
const arr = array();
arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0));
console.log(arr(1));
console.log(arr(2));

console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());

console.log(arr.pop());