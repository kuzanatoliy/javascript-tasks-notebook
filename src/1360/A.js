module.exports = {
  getMinAriaOfSquare: (width, height) => {
    const min = Math.min(width, height) << 1;
    const max = Math.max(width, height);
    return max > min ? max * max : min * min;
  },
};
