module.exports = {
  getW: (u, s) => {
    const sum = s.reduce((acc, curr) => acc + curr, 0);
    const squaredSum = s.reduce((acc, curr) => acc + curr * curr, 0);

    const a = 4 * s.length;
    const b = 4 * sum;
    const c = squaredSum - u;

    return Math.round(-b + (b * b - 4 * a * c) ** 0.5) / (2 * a);
  },
};
