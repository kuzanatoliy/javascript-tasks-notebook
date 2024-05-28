module.exports = {
  getPedestals: (count) => {
    let a = Math.ceil(count / 3);
    const b = a + 1;
    let c = count - a - b;
    if (c === 0) {
      a--;
      c++;
    }
    return [a, b, c];
  },
};
