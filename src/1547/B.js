module.exports = {
  isItPossibleToSortString: (string) => {
    let l = 0;
    while (l < string.length) {
      if (string[l] === 'a') {
        break;
      }
      l++;
    }
    if (l === string.length) {
      return 'NO';
    }
    let r = l;
    let curr = 'a';
    for (let j = 1; j < string.length; j++) {
      if (l > 0 && string[l - 1].charCodeAt() - curr.charCodeAt() === 1) {
        curr = string[l - 1];
        l--;
        continue;
      }
      if (
        r < string.length - 1 &&
        string[r + 1].charCodeAt() - curr.charCodeAt() === 1
      ) {
        curr = string[r + 1];
        r++;
        continue;
      }
      return 'NO';
    }

    return 'YES';
  },
};
