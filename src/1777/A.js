module.exports = {
  getCountOfOperations: (array) => {
    let count = 0;
    const arr = array.map((item) => item % 2);
    for (let j = 1; j < arr.length; j++) {
      if (arr[j - 1] === arr[j]) {
        count++;
      }
    }
    return count;
  },
};
