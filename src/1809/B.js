function min(a, b) {
  return a < b ? a : b;
}

function cal(n) {
  return (2n * n - 1n) ** 2n;
}

function cal2(n) {
  return (2n * n) ** 2n;
}

function binarySearch(l, r, fn) {
  while (l <= r) {
    const m = (l + r) / 2n;
    if (fn(m)) {
      l = m + 1n;
    } else {
      r = m - 1n;
    }
  }
  return r;
}

module.exports = {
  getCountOfPoints: (num) => {
    const a = binarySearch(1n, num, (x) => cal(x) < num) + 1n;
    const b = binarySearch(1n, num, (x) => cal2(x) < num) + 1n;
    return min(a * 2n - 2n, b * 2n - 1n);
  },
};
