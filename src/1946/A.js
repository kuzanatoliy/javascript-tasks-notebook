module.exports = {
  getCountOfOperations: (array) => {
    array.sort((a, b) => a - b);
    let m = Math.ceil(array.length / 2) - 1;
    const d = array[m];
    let count = 0;
    while (array[m] === d && m < array.length) {
      count++;
      m++;
    }
    return count;
  },
};
