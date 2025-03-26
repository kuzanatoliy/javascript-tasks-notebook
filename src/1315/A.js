module.exports = {
  getSizeOfArea: (a, b, x, y) =>
    Math.max((a - x - 1) * b, x * b, (b - y - 1) * a, y * a),
};
