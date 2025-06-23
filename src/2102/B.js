module.exports = {
  isItPossibleToTransformArray: (arr) => {
    const array = arr.map(Math.abs);
    const [first] = array;
    array.sort((a, b) => b - a);
    const mid = array[Math.ceil(arr.length / 2 - 1)];
    return first <= mid ? 'YES' : 'NO';
  },
};
