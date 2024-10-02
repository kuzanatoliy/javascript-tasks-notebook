module.exports = {
  getCountOfOperations: (map) => {
    const arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let j = 0; j < map.length; j++) {
      arr[map[j]]++;
    }
    const max = Math.max(...arr);
    if (max === 1) {
      return 4;
    }
    if (max === 4) {
      return -1;
    }
    if (max === 3) {
      return 6;
    }
    return 4;
  },
};
