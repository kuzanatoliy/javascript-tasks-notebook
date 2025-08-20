module.exports = {
  couldBeColored: (map) => {
    for (let j = 2; j < map.length; j++) {
      const temp = new Set([map[j - 2], map[j - 1], map[j]]);
      if (
        map[j - 2] !== '.' &&
        map[j - 1] !== '.' &&
        map[j] !== '.' &&
        temp.size === 3
      ) {
        return 'YES';
      }
    }
    return 'NO';
  },
};
