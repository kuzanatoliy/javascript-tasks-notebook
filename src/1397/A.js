module.exports = {
  isItPossibleToTransform: (strings) => {
    const map = {};
    for (let j = 0; j < strings.length; j++) {
      for (let jj = 0; jj < strings[j].length; jj++) {
        map[strings[j][jj]] = (map[strings[j][jj]] || 0) + 1;
      }
    }
    const keys = Object.keys(map);
    for (let k = 0; k < keys.length; k++) {
      if (map[keys[k]] % strings.length !== 0) {
        return 'NO';
      }
    }
    return 'YES';
  },
};
