module.exports = {
  isItPossibleToTransform: (arr) => {
    const temp = [];
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] !== j + 1) {
        temp.push(arr[j]);
      }
    }
    for (let jj = 1; jj < temp.length; jj++) {
      if (temp[jj] > temp[jj - 1]) {
        return 'NO';
      }
    }
    return 'YES';
  },
};
