module.exports = {
  getCountOfSteps: (boxes) => {
    const xArr = boxes.map((item) => item[0]);
    const yArr = boxes.map((item) => item[1]);
    return (
      2 *
      (Math.max(0, ...xArr) +
        Math.max(0, ...yArr) -
        Math.min(0, ...xArr) -
        Math.min(0, ...yArr))
    );
  },
};
