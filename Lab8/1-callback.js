'use strict';

const iterate = (obj, callback) => {
  for (const key in obj) {
    if (Object.hasOwn(obj, key)) {
      callback(key, obj[key], obj);
    }
  }
};

const obj = { a: 1, b: 2, c: 3 };

iterate(obj, (key, value) => {
  console.log(`key = ${key}, value = ${value}`);
});
