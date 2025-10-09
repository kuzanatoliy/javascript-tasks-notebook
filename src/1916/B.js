function nod(x, y) {
  while (x && y) {
    if (x > y) {
      x %= y;
    } else {
      y %= x;
    }
  }
  return x + y;
}

module.exports = {
  restoreNumber: (x, y) => {
    const num = nod(x, y);
    let res = (x / num) * y;
    if (res === y) {
      if (x === num) {
        res *= y / num;
      } else {
        res *= 2;
      }
    }
    return res;
  },
};
