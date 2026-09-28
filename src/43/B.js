module.exports = {
  isItPossibleToBuild: (s1, s2) => {
    const store = {};
    for (let j = 0; j < s1.length; j++) {
      if (s1[j] === ' ') {
        continue;
      }
      store[s1[j]] = 1 + (store[s1[j]] || 0);
    }
    for (let jj = 0; jj < s2.length; jj++) {
      if (s2[jj] === ' ') {
        continue;
      }
      if (store[s2[jj]]) {
        store[s2[jj]]--;
      } else {
        return 'NO';
      }
    }
    return 'YES';
  },
};
