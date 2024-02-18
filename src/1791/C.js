module.exports = {
  getCountOfOperation: (string) => {
    const l = string.length / 2;
    let count = 0;
    for (let j = 0; j < l; j++) {
      if (string[j] !== string[string.length - 1 - j]) {
        count++;
      } else {
        break;
      }
    }
    return string.length - count * 2;
  },
};
