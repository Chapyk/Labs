const phonebook = [
  { name: 'Volodymyr', phone: '+380445554433' },
  { name: 'Mugi', phone: '+380631234567' },
];

const findPhoneByName = (name) => {
  for (const item of phonebook) {
    if (item.name === name) return item.phone;
  }
};

console.log(findPhoneByName('Mugi'));