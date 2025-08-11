module.exports = {
  isItPossibleToSplitBaloons: (map, k) => {
    const fls = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0,
    ];
    for (let j = 0; j < map.length; j++) {
      const ind = map.charCodeAt(j) - 97;
      fls[ind]++;
      if (fls[ind] > k) {
        return 'NO';
      }
    }
    return 'YES';
  },
};
