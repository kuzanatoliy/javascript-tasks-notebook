module.exports = {
  getMaxDistance: (permutation) => {
    let max = 0;
    let min = 0;
    for (let i = 1; i < permutation.length; i++) {
      if (permutation[i] > permutation[max]) {
        max = i;
      }
      if (permutation[i] < permutation[min]) {
        min = i;
      }
    }
    return Math.max(
      max,
      min,
      Math.abs(permutation.length - min - 1),
      Math.abs(permutation.length - max - 1)
    );
  },
};
