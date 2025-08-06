module.exports = {
  getDelay: (a, b, params) => {
    let min =
      Math.sqrt(
        (a - params[0][0]) * (a - params[0][0]) +
          (b - params[0][1]) * (b - params[0][1])
      ) / params[0][2];
    for (let j = 1; j < params.length; j++) {
      const c =
        Math.sqrt(
          (a - params[j][0]) * (a - params[j][0]) +
            (b - params[j][1]) * (b - params[j][1])
        ) / params[j][2];
      if (c < min) {
        min = c;
      }
    }
    return min;
  },
};
