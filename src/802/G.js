const map = 'heidi';

module.exports = {
  isHeidiAsSubstr: (str) => {
    let c = 0;
    for (let j = 0; j < str.length; j++) {
      if (map[c] === str[j]) {
        c++;
      }
    }
    return c === map.length ? 'YES' : 'NO';
  },
};
