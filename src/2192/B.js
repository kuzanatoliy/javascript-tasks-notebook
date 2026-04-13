module.exports = {
  getCountOfOperations: (map) => {
    const m0 = [];
    const m1 = [];
    for (let j = 0; j < map.length; j++) {
      if (map[j] === '0') {
        m0.push(j + 1);
      } else {
        m1.push(j + 1);
      }
    }
    if (m0.length % 2) {
      return m0;
    } else if (m1.length % 2 === 0) {
      return m1;
    } else {
      return -1;
    }
  },
};
