module.exports = {
  getBoxesCount: (arr, volume) => {
    let count = 0;
    let size = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > volume) {
        return -1;
      }
      size += arr[j];
      if (size > volume) {
        count++;
        size = arr[j];
      }
    }
    if (size > 0) {
      count++;
    }
    return count;
  },
};
