const phonebook = {
  Volodymyr: '+380445554433',
  Mugi: '+380631234567',
};

const findPhoneByName = (name) => phonebook[name];

console.log(findPhoneByName('Volodymyr'));
console.log(findPhoneByName('Mugi'));