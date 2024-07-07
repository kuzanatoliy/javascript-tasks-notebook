/* eslint-disable no-undefined */
module.exports = {
  isItPossibleToTransform: (string) => {
    const map = {};
    for (let j = 0; j < string.length; j++) {
      const d = j % 2;
      if (map[string[j]] !== undefined && map[string[j]] !== d) {
        return 'NO';
      }
      map[string[j]] = d;
    }
    return 'YES';
  },
};
