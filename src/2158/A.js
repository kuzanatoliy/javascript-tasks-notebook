module.exports = {
  getMaxCountOfSuspendedPlayers: (num, y, r) =>
    Math.min(num, r + Math.floor(y / 2)),
};
