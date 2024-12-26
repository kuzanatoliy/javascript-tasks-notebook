module.exports = {
  isMoreFlyes: (str) => {
    let c1 = 0;
    let c2 = 0;
    for (let j = 1; j < str.length; j++) {
      if (str[j] === 'S' && str[j - 1] === 'F') {
        c1++;
        continue;
      }
      if (str[j] === 'F' && str[j - 1] === 'S') {
        c2++;
      }
    }
    return c2 > c1 ? 'YES' : 'NO';
  },
};
