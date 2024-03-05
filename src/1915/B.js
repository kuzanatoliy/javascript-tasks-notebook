/* eslint-disable consistent-return */
module.exports = {
  getLetter: (strings) => {
    for (let j = 0; j < strings.length; j++) {
      if (strings[j].indexOf('?') === -1) {
        continue;
      }
      if (strings[j].indexOf('A') === -1) {
        return 'A';
      }
      if (strings[j].indexOf('B') === -1) {
        return 'B';
      }
      if (strings[j].indexOf('C') === -1) {
        return 'C';
      }
    }
  },
};
