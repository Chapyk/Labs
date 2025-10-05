const ipToInt = (ip = '127.0.0.1') => {
  const fn = (res, item) => (res << 8) + parseInt(item);
  return ip.split('.').reduce(fn, 0);
};

console.log(ipToInt('127.0.0.1'));
console.log(ipToInt('123.0.0.456'));
console.log(ipToInt('10.0.0.1'));