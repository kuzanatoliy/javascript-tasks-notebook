module.exports = {
  getMaxBeauty: (arr) => {
    arr.sort((a, b) => a - b);
    let count = 1;
    let prev = -1;
    for (let j = 1; j < arr.length; j++) {
      if (arr[j - 1] !== arr[j]) {
        count++;
      } else if (arr[j] !== prev) {
        prev = arr[j];
        count++;
      }
    }
    return Math.ceil(count / 2);
  },
};
