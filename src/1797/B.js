module.exports = {
  isItPossibleToTransform: (matrix, k) => {
    let count = 0;
    const arr = [].concat(...matrix);
    for (let j = 0; j < arr.length / 2; j++) {
      if (arr[j] !== arr[arr.length - 1 - j]) {
        count++;
      }
    }
    return count > k ? 'NO' : 'YES';
  },
};
