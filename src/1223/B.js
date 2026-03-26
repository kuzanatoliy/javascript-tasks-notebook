module.exports = {
  isItPossibleToTransform: (str1, str2) => {
    const set = new Set(str1.split(''));
    const map = Array.from(new Set(str2.split('')));
    for (let j = 0; j < map.length; j++) {
      if (set.has(map[j])) {
        return 'YES';
      }
    }
    return 'NO';
  },
};
