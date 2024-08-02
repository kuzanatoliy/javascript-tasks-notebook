module.exports = {
  decodeString: (string) => {
    const set = Array.from(new Set(string.split(''))).sort();
    const map = {};
    for (let j = 0; j < set.length; j++) {
      map[set[j]] = set.length - j - 1;
    }
    let res = '';
    for (let j = 0; j < string.length; j++) {
      res += set[map[string[j]]];
    }
    return res;
  },
};
