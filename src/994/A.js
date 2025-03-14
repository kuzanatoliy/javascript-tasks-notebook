/* eslint-disable no-undefined */

module.exports = {
  getCode: (kb, keys) => {
    const map = {};
    for (let j = 0; j < kb.length; j++) {
      map[kb[j]] = j;
    }
    return keys
      .filter((item) => map[item] !== undefined)
      .sort((a, b) => map[a] - map[b]);
  },
};
