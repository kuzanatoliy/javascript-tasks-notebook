module.exports = {
  getMinCountOfOperations: (array) => {
    const arr = array.sort((a, b) => b - a);
    let count = 0;
    for (let j = 1; j < arr.length; j++) {
      count += 2 * arr[j] - 1;
    }
    return count;
  },
};
