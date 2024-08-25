/* eslint-disable sort-keys */
module.exports = {
  getMaxScore: (keys, k) => {
    const map = { A: 0, B: 0, C: 0, D: 0, '?': 0 };
    for (let j = 0; j < keys.length; j++) {
      map[keys[j]]++;
    }
    return (
      (map.A > k ? k : map.A) +
      (map.B > k ? k : map.B) +
      (map.C > k ? k : map.C) +
      (map.D > k ? k : map.D)
    );
  },
};
