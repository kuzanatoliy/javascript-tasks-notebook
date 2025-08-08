module.exports = {
  transformMap: (map) => {
    for (let j = 0; j < map.length; j++) {
      for (let jj = 0; jj < map[j].length; jj++) {
        if (map[j][jj] === '.') {
          map[j][jj] = 'D';
        }
        if (
          map[j][jj] === 'W' &&
          ((map[j - 1] && map[j - 1][jj] === 'S') ||
            (map[j + 1] && map[j + 1][jj] === 'S') ||
            map[j][jj - 1] === 'S' ||
            map[j][jj + 1] === 'S')
        ) {
          return ['NO'];
        }
      }
    }
    return ['YES', map];
  },
};
