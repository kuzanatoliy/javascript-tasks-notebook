module.exports = {
  isItPossibleToObtainStr: (str) => {
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      count += str[j] === '(';
    }
    const d = str.length / 2;
    if (count > d) {
      return 'NO';
    }
    let curr = 0;
    let store = d - count;
    for (let jj = 0; jj < str.length; jj++) {
      if (str[jj] === '(') {
        curr++;
      } else if (str[jj] === ')') {
        curr--;
      } else {
        curr += store > 0 ? 1 : -1;
        store--;
      }
      if (curr < 0) {
        return 'NO';
      }
    }
    return curr ? 'NO' : 'YES';
  },
};
