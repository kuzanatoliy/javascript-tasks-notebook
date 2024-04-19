module.exports = {
  getInitArray: (length, k) => {
    if (k === 0 && length === 1) {
      return [1];
    }

    const d = Math.floor(length / 2);
    if (d > k || d === 0) {
      return -1;
    }
    let x = k - d + 1;
    const res = [x];
    x *= 2;
    res.push(x);

    for (let j = 1; j < d; j++) {
      x++;
      res.push(x);
      x++;
      res.push(x);
    }

    if (length % 2 === 1) {
      res.push(++x);
    }

    return res;
  },
};
