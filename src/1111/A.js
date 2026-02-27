module.exports = {
  isItPossibleToTransform: (str1, str2) => {
    if (str1.length !== str2.length) {
      return 'NO';
    }
    const map = 'aeiou';
    for (let j = 0; j < str1.length; j++) {
      if (
        (map.indexOf(str1[j]) > -1 && map.indexOf(str2[j]) === -1) ||
        (map.indexOf(str2[j]) > -1 && map.indexOf(str1[j]) === -1)
      ) {
        return 'NO';
      }
    }
    return 'YES';
  },
};
