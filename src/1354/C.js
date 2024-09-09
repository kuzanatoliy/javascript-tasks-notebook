module.exports = {
  getSide: (num) => {
    const r = 1 / (2 * Math.sin(Math.PI / (2 * Number(num))));
    const t = Math.sqrt(r * r - 0.25);
    return t * 2;
  },
};
