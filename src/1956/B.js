module.exports = {
  getScore: (arr) => {
    arr.sort((a, b) => a - b);
    let count = 0;
    let j = 1;
    while (j < arr.length) {
      if (arr[j] === arr[j - 1]) {
        count++;
        j++;
      }
      j++;
    }
    return count;
  },
};
