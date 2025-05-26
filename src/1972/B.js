module.exports = {
  isItPossibleToWin: (map) => {
    let count = 0;
    for (let j = 0; j < map.length; j++) {
      count += map[j] === 'U';
    }
    return count % 2 === 1 ? 'YES' : 'NO';
  },
};
