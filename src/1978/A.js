module.exports = {
  getBetterSum: (arr) => {
    let [max] = arr;
    for (let j = 1; j < arr.length - 1; j++) {
      if (max < arr[j]) {
        max = arr[j];
      }
    }
    return max + arr[arr.length - 1];
  },
};
