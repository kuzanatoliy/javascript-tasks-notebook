module.exports = {
  getSums: (array) => {
    const sums = [0, 0, 0];
    for (let j = 0; j < array.length; j++) {
      sums[j % 3] += array[j];
    }
    if (sums[0] > sums[1] && sums[0] > sums[2]) {
      return 'chest';
    }
    if (sums[1] > sums[0] && sums[1] > sums[2]) {
      return 'biceps';
    }
    return 'back';
  },
};
