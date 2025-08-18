module.exports = {
  getMinDelay: (queues) =>
    Math.min(
      ...queues.map(
        (item) => item.reduce((a, b) => a + b, 0) * 5 + item.length * 15
      )
    ),
};
