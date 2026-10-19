module.exports = {
  getSuspectsCount: (map) => {
    let r = map.length - 1;
    for (let j = 0; j < map.length; j++) {
      if (map[j] === '0') {
        r = j;
        break;
      }
    }
    let l = 0;
    for (let jj = map.length - 1; jj > 0; jj--) {
      if (map[jj] === '1') {
        l = jj;
        break;
      }
    }
    return r - l + 1;
  },
};
