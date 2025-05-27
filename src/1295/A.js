module.exports = {
  generateNumber: (num) => {
    let res = '';
    if (num % 2 === 1) {
      res += '7';
      num -= 3;
    }
    return res + new Array(num / 2).fill(1).join('');
  },
};
