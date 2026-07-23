module.exports = {
  getOperationsCount: (arr) => {
    arr.reverse();
    let size = 1;
    let count = 0;
    while (size < arr.length) {
      if (arr[size] === arr[0]) {
        size++;
      } else {
        count++;
        size *= 2;
      }
    }
    return count;
  },
};
