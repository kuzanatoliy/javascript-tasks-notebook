module.exports = {
  getCorrectCharactersSet: (str) => {
    const store = new Set();
    for (let j = 0; j < str.length; j++) {
      if (str[j] !== str[j + 1]) {
        store.add(str[j]);
      } else {
        j++;
      }
    }
    return Array.from(store).sort().join('');
  },
};
