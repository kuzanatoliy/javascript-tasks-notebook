module.exports = {
  getCountOfOperations: (arr) => {
    let count = 0;
    let prev = arr[arr.length - 1];
    for (let j = arr.length - 2; j >= 0; j--) {
      if (prev < arr[j]) {
        count++;
        prev = arr[j];
      }
    }
    return count;
  },
};
