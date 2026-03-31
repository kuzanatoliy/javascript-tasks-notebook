module.exports = {
  isItPossibleToTransform: (str1, str2) => {
    const difs = [];
    for (let j = 0; j < str1.length; j++) {
      if (str1[j] !== str2[j]) {
        difs.push(j);
      }
    }
    return difs.length === 2 &&
      str1[difs[0]] === str1[difs[1]] &&
      str2[difs[0]] === str2[difs[1]]
      ? 'YES'
      : 'NO';
  },
};
