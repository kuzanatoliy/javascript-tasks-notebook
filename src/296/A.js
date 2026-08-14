module.exports = {
  isItPossibleToTransform: (arr) => {
    const map = {};
    for (let j = 0; j < arr.length; j++) {
      map[arr[j]] = (map[arr[j]] || 0) + 1;
    }
    return Math.max(...Object.keys(map).map((item) => map[item])) >
      Math.ceil(arr.length / 2)
      ? 'NO'
      : 'YES';
  },
};
