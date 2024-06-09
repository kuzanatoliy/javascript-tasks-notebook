module.exports = {
  getCountOfOperations: (origin) => {
    let alt = Math.floor(origin / 3);
    const d = origin % 3;
    if (d === 2 || (origin >= 4 && (origin - 4) % 3 === 0)) {
      alt++;
    } else if (d === 1) {
      alt += 2;
    }
    return alt;
  },
};
