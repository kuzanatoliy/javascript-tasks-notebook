module.exports = {
  isReaded: (count, init, map) => {
    let c1 = init;
    let c2 = init;
    if (count === init) {
      return 'YES';
    }
    for (let j = 0; j < map.length; j++) {
      if (map[j] === '+') {
        c1++;
        c2++;
        if (c1 === count) {
          return 'YES';
        }
      } else {
        c1--;
      }
    }
    return c2 < count ? 'NO' : 'MAYBE';
  },
};
