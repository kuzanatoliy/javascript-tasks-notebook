function isP(n) {
  const h = (n / 60) | 0;
  const m = n - h * 60;
  const hs = String(h).length === 1 ? `0${h}` : `${h}`;
  const ms = String(m).length === 1 ? `0${m}` : `${m}`;
  return hs.split('').reverse().join('') === ms;
}

module.exports = {
  getCountOfPalindromTimes: (startTime, step) => {
    const [h, m] = startTime.split(':').map((item) => +item);
    const start = h * 60 + m;
    let next = start;
    let cnt = 0;
    do {
      next += step;
      next %= 1440;
      if (isP(next)) {
        cnt++;
      }
    } while (next !== start);

    return cnt;
  },
};
