module.exports = {
  getPair: (snum) => {
    const d = Math.sqrt(+snum);
    if (d === Math.round(d)) {
      return [0, d];
    }
    return [-1];
  },
};
