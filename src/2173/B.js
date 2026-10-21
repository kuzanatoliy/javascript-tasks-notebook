module.exports = {
  getMaxScore: (arrA, arrB) => {
    let max = 0;
    let min = 0;
    for (let j = 0; j < arrA.length; j++) {
      const dmax = Math.max(max - arrA[j], arrB[j] - min);
      const dmin = Math.min(min - arrA[j], arrB[j] - max);
      max = dmax;
      min = dmin;
    }
    return max;
  },
};
