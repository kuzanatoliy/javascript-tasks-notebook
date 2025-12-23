module.exports = {
  isItPossibleToTransform: (arrA, arrB) => {
    const d = arrA.map((item, ind) => item - arrB[ind]).sort((a, b) => a - b);
    return d[0] < 0 && Math.abs(d[0]) > d[1] ? 'NO' : 'YES';
  },
};
