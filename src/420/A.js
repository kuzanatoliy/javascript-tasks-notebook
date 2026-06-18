const MAP = 'AHIMOTUVWXY';

module.exports = {
  isSymmetricString: (str) => {
    for (let j = 0; j < str.length; j++) {
      if (MAP.indexOf(str[j]) === -1) {
        return 'NO';
      }
    }
    return str === str.split('').reverse().join('') ? 'YES' : 'NO';
  },
};
