const alphabet = 'abcdefghijklmnopqrstuvwxyz';

module.exports = {
  getPassword: (num, k) => {
    let res = '';
    for (let j = 0; j < num; j++) {
      res += alphabet[j % k];
    }
    return res;
  },
};
