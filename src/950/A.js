module.exports = {
  getMaxCountOfPlayers: (left, right, double) => {
    let min = Math.min(left, right);
    const count = min * 2;
    left -= min;
    right -= min;
    min = Math.min(double, left || right);
    return count + min * 2 + Math.floor((double - min) / 2) * 2;
  },
};
