module.exports = {
  getPosition: (map) => {
    let l = -2;
    let r = map.length + 1;
    for (let j = 0; j < map.length; j++) {
      if (map[j] === 'L') {
        l = j;
      } else if (r === map.length + 1) {
        r = j;
      }
    }
    if (l + 1 === r) {
      return r;
    } else if (l > r) {
      return 0;
    } else {
      return -1;
    }
  },
};
