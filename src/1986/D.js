module.exports = {
  getMinResultOfExpression: (map) => {
    if (map.length === 2) {
      return Number(map);
    }
    if (map.length === 3) {
      const n1 = Number(map[0] + map[1]);
      const n2 = Number(map[2]);
      const n3 = Number(map[0]);
      const n4 = Number(map[1] + map[2]);
      return Math.min(n1 + n2, n3 + n4, n1 * n2, n3 * n4);
    }
    for (let jj = 0; jj < map.length; jj++) {
      if (map[jj] === '0') {
        return 0;
      }
    }
    let ans = 0x3f3f3f3f;
    for (let i = 0; i < map.length - 1; i++) {
      let ds = parseInt(map.substring(i, i + 2));
      for (let j = 0; j < map.length; j++) {
        if (j === i || j === i + 1) {
          continue;
        }
        if (map[j] === '1') {
          continue;
        } else {
          ds += map[j] - 0;
        }
      }
      ans = Math.min(ds, ans);
    }
    return ans;
  },
};
