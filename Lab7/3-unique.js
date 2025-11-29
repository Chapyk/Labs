const unique = (array) => {
  const result = [];
  for (const item of array) {
    if (!result.includes(item)) {
      result.push(item);
    };
  };
  return result;
};

const arr = [1, 2, 2, 3, 4, 3];
const res = unique(arr);
console.log(res); 
console.log(arr); 