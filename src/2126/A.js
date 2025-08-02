module.exports = {
  getMinNumber: (num) =>
    Math.min(
      ...num
        .toString()
        .split('')
        .map((item) => +item)
    ),
};
