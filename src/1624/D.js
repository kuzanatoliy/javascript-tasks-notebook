module.exports = {
  getMaxLength: (string, k) => {
    const map = {};
    for (let j = 0; j < string.length; j++) {
      map[string[j]] = (map[string[j]] || 0) + 1;
    }
    const keys = Object.keys(map);
    let d = 0;
    let count = 0;
    for (let jj = 0; jj < keys.length; jj++) {
      const dd = map[keys[jj]] % 2;
      count += (map[keys[jj]] - dd) / 2;
      d += dd;
    }
    const ddd = count % k;
    count = (count - ddd) / k;
    if (ddd === 0) {
      if (d < k) {
        return count * 2;
      }
      return count * 2 + 1;
    }
    if (ddd >= k / 2 || d >= k - ddd * 2) {
      return count * 2 + 1;
    }
    return count * 2;
  },
};
