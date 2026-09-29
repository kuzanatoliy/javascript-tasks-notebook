module.exports = {
  getMinString: (str) => {
    let j = 0;
    if (str[0] > str[1]) {
      while (str[j] >= str[j + 1]) {
        j++;
      }
    }
    const res = str.slice(0, j + 1);
    return `${res}${res.split('').reverse().join('')}`;
  },
};
