const mask = 'CODEFORCES';

module.exports = {
  isItPossibleToCut: (string) => {
    if (string.length < mask.length) {
      return 'NO';
    }
    let index = 0;
    while (index < mask.length && mask[index] === string[index]) {
      index++;
    }
    for (
      let j = string.length - mask.length + index;
      j < string.length;
      j++, index++
    ) {
      if (string[j] !== mask[index]) {
        return 'NO';
      }
    }
    return 'YES';
  },
};
