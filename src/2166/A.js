module.exports = {
  getCountOfOperations: (str) => {
    let count = str.length;
    for (let j = str.length - 1; j >= 0; j--) {
      count -= str[j] === str[str.length - 1];
    }
    return count;
  },
};
