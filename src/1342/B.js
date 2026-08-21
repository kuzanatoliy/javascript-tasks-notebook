module.exports = {
  transformString: (str) => {
    let c0 = +(str[0] === '0');
    let c1 = +(str[0] === '1');
    let [res] = str;
    for (let j = 1; j < str.length; j++) {
      if (str[j - 1] === '0' && str[j] === '0') {
        c0++;
        res += '10';
        continue;
      }
      if (str[j - 1] === '1' && str[j] === '1') {
        c1++;
        res += '01';
        continue;
      }
      res += str[j];
    }
    return c0 === str.length || c1 === str.length ? str : res;
  },
};
