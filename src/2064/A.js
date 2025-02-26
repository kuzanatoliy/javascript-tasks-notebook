module.exports = {
  getCountOfOperations: (str) => {
    let count = 0;
    for (let j = 1; j < str.length; j++) {
      if (str[j - 1] !== str[j]) {
        count++;
      }
    }
    return count + +str[0];
  },
};
