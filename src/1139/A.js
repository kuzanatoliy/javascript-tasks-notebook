module.exports = {
  getCountOfEvenSubstrs: (str) => {
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[j] % 2 === 0) {
        count += j + 1;
      }
    }
    return count;
  },
};
