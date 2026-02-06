module.exports = {
  getMinCost: (map) => {
    let j = 0;
    while (map[j] === '0') {
      j++;
    }
    let cost = 0;
    let curr = 0;
    while (j < map.length) {
      if (map[j] === '1') {
        curr++;
      } else {
        cost += curr + 1;
      }
      j++;
    }
    return cost;
  },
};
