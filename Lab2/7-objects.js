const fn = () => {
  const object1 = { name: 'Volodymyr' };
  let object2 = { name: 'Volodymyr' };

  object1.name = 'Krukovskyi';
  object2.name = 'Krukovskyi';
  object2 = { name: 'Volodymyr Krukovskyi' };

  console.log(object2.name);
};

console.log(fn());
