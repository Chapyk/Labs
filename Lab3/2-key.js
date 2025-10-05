const generateKey = (length, characters) => {
  const base = characters.length;
  let key = '';
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * base);
    key += characters[index];
  }
  return key;

};
const random = (min, max) => {
    if (max === undefined) {
        max=min;
        min=0;
     };
     return min + Math.floor(Math.random() * (max - min + 1));
    };
    
    let randomNum = (random(1,25));

console.log(generateKey(randomNum, '4ew7r6ybg2r36tf8gyitf387g'))