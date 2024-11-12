module.exports = {
  getString: (num) =>
    `1${Array(num - 1)
      .fill('0')
      .join('')}`,
};
