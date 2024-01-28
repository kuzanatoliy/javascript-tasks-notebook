const V = '?';

module.exports = {
  isWinningStrategy: (n, k, vals) => {
    const value = new Array(n + 1).fill(0);
    let q = 0;
    let sum = 0;
    for (let i = 0; i <= n; i++) {
      if (vals[i] === V) {
        q++;
        value[i] = Number.MAX_SAFE_INTEGER;
      } else {
        value[i] = vals[i];
      }
    }
    if (k === 0) {
      if (q > 0 && value[0] === Number.MAX_SAFE_INTEGER) {
        return (n + 1 - q) % 2 === 0 ? 'no' : 'yes';
      } else {
        return value[0] === 0 ? 'yes' : 'no';
      }
    } else {
      if (q > 0) {
        return n % 2 > 0 ? 'yes' : 'no';
      }
      for (let i = n; i > 0; i--) {
        sum = (sum + value[i]) * k;
      }
      if (Math.abs(sum + value[0]) > 1e10) {
        return 'no';
      }
      return sum === -value[0] ? 'yes' : 'no';
    }
  },
};
