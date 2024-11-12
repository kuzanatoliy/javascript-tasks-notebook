module.exports = {
  getCountOfLights: (arr) => {
    const num = arr.length / 2;
    const count = arr.reduce((a, b) => a + b);
    return [count % 2, num > count ? count : 2 * num - count];
  },
};
