/* eslint-disable no-undefined */
module.exports = {
  isItPossibleToBuildString: (str) => {
    const map = {};
    for (let i = 0; i < str.length - 1; i++) {
      const substr = str[i] + str[i + 1];
      if (map[substr] !== undefined) {
        if (map[substr] !== i) {
          return 'YES';
        }
        continue;
      }

      map[substr] = i + 1;
    }
    return 'NO';
  },
};
