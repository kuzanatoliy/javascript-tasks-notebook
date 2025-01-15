module.exports = {
  isItPossibleToTransform: (arr) => {
    const inds = [];
    for (let j = 1; j < arr.length; j++) {
      if (arr[j - 1] > arr[j]) {
        inds.push(j);
      }
    }
    return inds.length === 0 ||
      (inds.length === 1 && arr[0] >= arr[arr.length - 1])
      ? 'YES'
      : 'NO';
  },
};
