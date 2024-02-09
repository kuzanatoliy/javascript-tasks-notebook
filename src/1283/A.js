module.exports = {
  getMinutes: (hours, minutes) => (24 - hours) * 60 - minutes,
};
