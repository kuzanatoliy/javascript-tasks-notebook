module.exports = {
  getCountOfRemoves: (string) => {
    let s = 0;
    while (string[s] === '0' && s < string.length) {
      s++;
    }
    let l = string.length - 1;
    while (string[l] === '0' && l > s) {
      l--;
    }
    let count = 0;
    for (let j = s; j < l; j++) {
      if (string[j] === '0') {
        count++;
      }
    }
    return count;
  },
};
