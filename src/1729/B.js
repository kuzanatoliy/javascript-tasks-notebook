const alphabet = 'abcdefghijklmnopqrstuvwxyz';

module.exports = {
  getOriginalString: (string) => {
    let str = '';
    let j = 0;
    while (j < string.length) {
      if (string[j + 2] === '0' && string[j + 3] !== '0') {
        str += alphabet[Number(string[j] + string[j + 1]) - 1];
        j += 3;
        continue;
      }
      str += alphabet[Number(string[j]) - 1];
      j++;
    }
    return str;
  },
};
