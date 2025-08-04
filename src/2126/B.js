module.exports = {
  getCountOfHikes: (arr, k) => {
    let count = 0;
    let temp = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === 1) {
        temp = 0;
        continue;
      }
      temp++;
      if (temp === k) {
        count++;
        temp = 0;
        j++;
      }
    }
    return count;
  },
};
