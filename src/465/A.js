module.exports = {
  getCountOfOperations: (map) => {
    let count = 0;
    for (let j = 0; j < map.length && map[j] === '1'; j++) {
      count++;
    }
    return count === map.length ? count : count + 1;
  },
};
