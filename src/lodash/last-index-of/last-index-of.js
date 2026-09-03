module.exports = {
  lastIndexOf: (arr, value, start = arr.length - 1) => {
    for (let j = start; j >= 0; j--) {
      if (arr[j] === value) {
        return j;
      }
    }
    return -1;
  },
};
