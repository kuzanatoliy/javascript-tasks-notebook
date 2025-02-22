const alphabet = 'abcdefghijklmnopqrstuvwxyz';

module.exports = {
  getString: (num, k) => {
    let str = '';
    for (let j = 0; j < num; j++) {
      str += alphabet[j % k];
    }
    return str;
  },
};
