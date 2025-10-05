const alo = [false, "pomidor", 52, -48, true, "null", 0, "false", null, {},];

const collection = {number: 0, string: 0, boolean: 0, object: 0};

for (const item of alo) {
    const type = typeof item;

    if (type in collection) {
        collection[type]++;
    }
}

console.dir(collection);