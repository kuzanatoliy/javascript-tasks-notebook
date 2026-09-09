module.exports = {
  getMinLength: (map) => {
    let count = 0;
    let cand = 0;
    let j = 0;
    let fb = 0;
    while (j < map.length && map[j] === 'B') {
      fb++;
      j++;
    }
    while (j < map.length) {
      count += map[j] === 'A';
      cand += map[j] === 'B';
      if (map[j] === 'B' && map[j + 1] !== 'B') {
        count -= count < cand ? cand - Math.ceil((cand - count) / 2) * 2 : cand;
        cand = 0;
      }
      j++;
    }
    return count + (fb % 2);
  },
};
