module.exports = {
  getMinCost: (m, k, map) => {
    let res = 0;
    let c = 0;
    for (let j = 0; j < map.length; j++) {
      if (map[j] === '0') {
        c++;
        if (c === m) {
          res++;
          j += k - 1;
          c = 0;
        }
      } else {
        c = 0;
      }
    }
    return res;
  },
};
