module.exports = {
  whoHasHigherChance: (map1, map2) => {
    let count = 0;
    for (let j = 0; j < map1.length; j++) {
      if (map1[j] === map2[j]) {
        continue;
      }
      count += map1[j] > map2[j] ? 1 : -1;
    }
    if (count === 0) {
      return 'EQUAL';
    } else {
      return count > 0 ? 'RED' : 'BLUE';
    }
  },
};
