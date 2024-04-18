module.exports = {
  getCountOfSurvivers: (array) => {
    const map = {};

    for (let j = 0; j < array.length; j++) {
      map[array[j]] = (map[array[j]] || 0) + 1;
    }

    const max = Object.keys(map).reduce((a, b) => (a > map[b] ? a : map[b]), 0);

    return Math.max(array.length % 2, max + max - array.length);
  },
};
