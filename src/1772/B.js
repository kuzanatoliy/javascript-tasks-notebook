function check(a, b, c, d) {
  return a < b && c < d && a < c && b < d;
}

module.exports = {
  isBeautifulMatrix: (matrix) =>
    check(matrix[0][0], matrix[0][1], matrix[1][0], matrix[1][1]) ||
    check(matrix[1][0], matrix[0][0], matrix[1][1], matrix[0][1]) ||
    check(matrix[1][1], matrix[1][0], matrix[0][1], matrix[0][0]) ||
    check(matrix[0][1], matrix[1][1], matrix[0][0], matrix[1][0])
      ? 'YES'
      : 'NO',
};
