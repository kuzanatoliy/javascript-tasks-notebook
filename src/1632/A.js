module.exports = {
  isItPossibleToOpenAllDors: (keys) => {
    const map = {};
    for (let j = 0; j < keys.length; j++) {
      const s = keys[j].toLowerCase();
      if (s === keys[j]) {
        map[s] = true;
      }
      if (!map[s]) {
        return 'NO';
      }
    }
    return 'YES';
  },
};
