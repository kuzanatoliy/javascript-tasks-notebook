module.exports = {
  isItPossibleToTransform: (map, k) => {
    let c = 0;
    for (let j = 0; j < map.length; j++) {
      c += map[j] === '1';
    }
    const c0 = Math.floor((map.length - c) / 2);
    const c1 = Math.floor(c / 2);
    const d = Math.abs(c1 - c0);
    if (d > k || k > c1 + c0) {
      return 'NO';
    }
    return (k - d) % 2 ? 'NO' : 'YES';
  },
};
