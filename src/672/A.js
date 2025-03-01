module.exports = {
  getNthDigit: (num) => {
    let str = '';
    let next = 1;
    while (str.length < num) {
      str += next;
      next++;
    }
    return str[num - 1];
  },
};
