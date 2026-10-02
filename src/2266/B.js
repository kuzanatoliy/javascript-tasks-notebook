module.exports = {
  getMinWeakParticipantsCount: (a, b, c) =>
    Math.max(Math.abs(a - b), Math.abs(a + c - b)),
};
