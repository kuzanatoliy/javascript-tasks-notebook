module.exports = {
  isItPossibleToTransfomr: (points) => {
    let count = 0;
    for (let j = 0; j < points.length; j++) {
      count += points[j][0] > 0;
    }
    return count === 0 ||
      count === 1 ||
      count === points.length ||
      count === points.length - 1
      ? 'YES'
      : 'NO';
  },
};
