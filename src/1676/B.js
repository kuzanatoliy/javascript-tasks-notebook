module.exports = {
  getCountOfCandies: (boxes) => {
    const min = Math.min(...boxes);
    let sum = 0;
    for (let j = 0; j < boxes.length; j++) {
      sum += boxes[j] - min;
    }
    return sum;
  },
};
