module.exports = {
  getMinCountOfOperations: (array) => {
    const map = new Array(102).fill(0);
    for (let j = 0; j < array.length; j++) {
      map[array[j]]++;
    }
    let max = 0;
    for (let jj = 0; jj < map.length; jj++) {
      if (map[jj] > max) {
        max = map[jj];
      }
    }
    return array.length - max;
  },
};
