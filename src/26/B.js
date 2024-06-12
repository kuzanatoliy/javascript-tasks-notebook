module.exports = {
  getLength: (string) => {
    if (string.length <= 1) {
      return 0;
    }
    let start = 0;
    while (start < string.length && string[start] === ')') {
      start++;
    }
    let end = string.length - 1;
    while (end >= 0 && string[end] === '(') {
      end--;
    }
    let count = 0;
    let store = 0;
    for (let j = start; j <= end; j++) {
      if (string[j] === '(') {
        store++;
      } else if (store > 0) {
        store--;
        count += 2;
      }
    }
    return count;
  },
};
