module.exports = {
  getIndexes: (array) => {
    const arr = new Array(array.length + 1);
    array.forEach((item, ind) => {
      arr[item] = ind;
    });
    if (arr[1] > arr[array.length] && arr[2] > arr[array.length]) {
      return [arr[array.length] + 1, Math.min(arr[1], arr[2]) + 1];
    }
    if (arr[1] < arr[array.length] && arr[2] < arr[array.length]) {
      return [arr[array.length] + 1, Math.max(arr[1], arr[2]) + 1];
    }
    return [arr[1] + 1, arr[2] + 1];
  },
};
