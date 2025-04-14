module.exports = {
  getPosition: (map) => {
    if (
      map.length === 4 &&
      map[0] === map[1] &&
      map[2] === map[3] &&
      map[1] !== map[2]
    ) {
      return 2;
    }
    const counts = { L: 0, O: 0 };
    for (let j = 0; j < map.length; j++) {
      counts[map[j]]++;
    }
    if (counts[map[0]] !== 2) {
      return 1;
    } else if (counts[map[map.length - 1]] !== 2) {
      return map.length - 1;
    } else {
      return -1;
    }
  },
};
