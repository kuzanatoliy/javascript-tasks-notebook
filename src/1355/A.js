module.exports = {
  getDecimalRepresentation: (number, iterations) => {
    for (let j = 1; j < iterations; j++) {
      const arr = number
        .toString()
        .split('')
        .map((item) => +item);
      const min = Math.min(...arr);
      if (min === 0) {
        return number;
      }
      const max = Math.max(...arr);
      number += min * max;
    }
    return number;
  },
};
