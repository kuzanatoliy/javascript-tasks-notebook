module.exports = {
  getLength: (arr) => {
    let count = 1 + arr[0];
    for (let j = 1; j < arr.length; j++) {
      if (arr[j - 1] === 1 && arr[j] === 1) {
        count += 5;
        continue;
      }
      if (arr[j - 1] === 0 && arr[j] === 1) {
        count++;
        continue;
      }
      if (arr[j - 1] === 0 && arr[j] === 0) {
        return -1;
      }
    }
    return count;
  },
};
