module.exports = {
  getWinner: (map) => {
    let c1 = 0;
    for (let j = 0; j < map.length; j++) {
      c1 += map[j] === '1';
    }
    return Math.min(c1, map.length - c1) % 2 === 0 ? 'NET' : 'DA';
  },
};
