module.exports = {
  getCellCount: (map) => {
    let count = 0;
    for (let j = 2; j < map[0].length; j++) {
      count +=
        map[0][j - 2] === 'x' &&
        map[0][j - 1] === '.' &&
        map[0][j] === 'x' &&
        map[1][j - 2] === '.' &&
        map[1][j - 1] === '.' &&
        map[1][j] === '.';
      count +=
        map[0][j - 2] === '.' &&
        map[0][j - 1] === '.' &&
        map[0][j] === '.' &&
        map[1][j - 2] === 'x' &&
        map[1][j - 1] === '.' &&
        map[1][j] === 'x';
    }
    return count;
  },
};
