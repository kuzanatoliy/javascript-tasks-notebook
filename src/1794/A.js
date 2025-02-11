module.exports = {
  isItPolindrome: (strs) => {
    let first = '';
    let second = '';
    let count = 0;
    const len = strs.length / 2;
    for (let j = 0; j < strs.length; j++) {
      if (strs[j].length === len) {
        if (count === 0) {
          first = strs[j];
          count++;
        } else {
          second = strs[j];
        }
      }
    }

    return first.split('').reverse().join('') === second ? 'YES' : 'NO';
  },
};
