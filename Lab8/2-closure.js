'use strict';

const store = (x) => () => x;

module.exports = { store };

const read = store(42); 
const value = read();
console.log(value);
