module.exports = {
  getTransformProps: (a, b) => {
    if (a === b) {
      return [0, 0];
    }
    const g = Math.abs(a - b);
    return [g, Math.min(a % g, g - (a % g))];
  },
};
