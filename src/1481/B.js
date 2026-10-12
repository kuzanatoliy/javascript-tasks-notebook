module.exports = {
  getPosition: (k, arr) => {
    let j = 0;
    while (j < arr.length && k) {
      if (arr[j] < arr[j + 1]) {
        arr[j] += 1;
        k--;
        if (arr[j - 1] && k) {
          j--;
        }
      } else {
        j++;
      }
    }
    return k > 0 ? -1 : j + 1;
  },
};
