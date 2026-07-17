module.exports = {
  getAdgesSum: (s1, s2, s3) =>
    4 *
    (Math.sqrt((s1 * s3) / s2) +
      Math.sqrt((s1 * s2) / s3) +
      Math.sqrt((s2 * s3) / s1)),
};
