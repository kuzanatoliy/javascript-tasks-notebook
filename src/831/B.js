module.exports = {
  getOriginalWord: (kb1, kb2, word) => {
    const map1 = {};
    for (let j = 0; j < kb1.length; j++) {
      map1[kb1[j]] = j;
    }
    const map2 = {};
    for (let jj = 0; jj < kb2.length; jj++) {
      map2[jj] = kb2[jj];
    }
    let str = '';
    for (let jjj = 0; jjj < word.length; jjj++) {
      const lower = word[jjj].toLowerCase();
      const candidate = map2[map1[lower]];
      if (!candidate) {
        str += word[jjj];
        continue;
      }
      str +=
        lower === word[jjj]
          ? map2[map1[lower]]
          : map2[map1[lower]].toUpperCase();
    }
    return str;
  },
};
