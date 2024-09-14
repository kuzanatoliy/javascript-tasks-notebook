module.exports = {
  getCountOfSteps: (x, y, a, b) => {
    const d = y - x;
    const step = a + b;
    return d % step === 0 ? d / step : -1;
  },
};
