module.exports = {
  getCountOfOperations: (map) => {
    let count = 0;
    for (let j = 0; j < map.length - 1; j++) {
      count += +map[j] + (map[j] !== '0');
    }
    count += +map[map.length - 1];
    return count;
  },
};
