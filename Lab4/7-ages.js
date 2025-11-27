'use strict';

const ages = (persons) => {
  const results = {};
  for (const name in persons) {
    const person = persons[name];
    results[name] = person.died - person.born;
  }
  return results;
};

console.log(ages({
    Mari: { born: 1981, died: 1996 },
    Basil: { born: 1984, died: 2000 },
}));

