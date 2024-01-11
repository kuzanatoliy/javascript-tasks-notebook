module.exports = {
  getCountOfGoodSubarrays: (number) => {
    const arr = `${number}`.split('');
    const m = new Map();
    m.set(0, 1);
    let ans = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += +arr[i];
      const x = sum - i - 1;
      if (!m.has(x)) {
        m.set(x, 0);
      }
      const v = m.get(x);
      m.set(x, v + 1);
      ans += v;
    }
    return ans;
  },
};
