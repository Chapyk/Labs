'use strict';

const compose = (...fns) => {
  const handlers = [];
  const composed = (x) => {
    if (fns.length === 0) return x;
    const last = fns.length - 1;
    let res = x;
    try {
      for (let i = last; i >= 0; i--) {
        res = fns[i](res);
      }
      return res;
    } catch (error) {
      for (const handler of handlers) {
        handler(error);
      }
      return null;
    }
  };
  composed.on = (name, handler) => {
    if (name === 'error') handlers.push(handler);
  };
  return composed;
};

const inc = x => x + 1;
const twice = x => x * 2;
const crash = x => { throw new Error("всередині сталася помилка!"); };

const g = compose(inc, twice);
const f = compose(inc, twice, crash);

f.on('error', (err) => {
  console.log("спіймали помилку:", err.message);
});

console.log(f(10));
console.log(g(10));