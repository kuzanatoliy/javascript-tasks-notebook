module.exports = {
  getBitStr: (a, b) => {
    let str = '';
    let j = 1;
    while (j <= a && j <= b) {
      str += '01';
      j++;
    }
    while (j <= a) {
      str += '0';
      j++;
    }
    while (j <= b) {
      str += '1';
      j++;
    }
    return str;
  },
};
