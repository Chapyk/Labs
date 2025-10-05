const random = (min, max) => {
    if (max === undefined) {
        max=min;
        min=0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
};

console.log(random(90,100));
console.log(random(100));
module.exports = { random };