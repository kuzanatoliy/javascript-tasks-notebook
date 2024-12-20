module.exports = {
  getCountOfSocks: (arr) => {
    let count = 0;
    let max = 0;
    const fls = new Array(arr.length / 2).fill(false);
    for (let j = 0; j < arr.length; j++) {
      fls[arr[j]] = !fls[arr[j]];
      if (fls[arr[j]]) {
        count++;
      } else {
        count--;
      }
      max = Math.max(max, count);
    }
    return max;
  },
};
