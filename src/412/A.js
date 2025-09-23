module.exports = {
  getActions: (map, k) => {
    if (k > map.length / 2) {
      const res = new Array(map.length - k).fill('RIGHT');
      res.push(`PRINT ${map[map.length - 1]}`);
      for (let j = map.length - 2; j >= 0; j--) {
        res.push('LEFT');
        res.push(`PRINT ${map[j]}`);
      }
      return res;
    } else {
      const res = new Array(k - 1).fill('LEFT');
      res.push(`PRINT ${map[0]}`);
      for (let j = 1; j < map.length; j++) {
        res.push('RIGHT');
        res.push(`PRINT ${map[j]}`);
      }
      return res;
    }
  },
};
