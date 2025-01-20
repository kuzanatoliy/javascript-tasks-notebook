module.exports = {
  getString: (num) => {
    let str = 'abc';
    while (str.length < num) {
      str += str;
    }
    return str.slice(0, num);
  },
};
