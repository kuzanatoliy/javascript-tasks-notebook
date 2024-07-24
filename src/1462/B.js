module.exports = {
  isItPossibleToGetYear: (string) => {
    const target = '2020';
    let count = 0;
    for (let j = 0; j < 4 && string[j] === target[j]; j++) {
      count++;
    }
    for (
      let j = 0;
      j < 4 && string[string.length - 1 - j] === target[target.length - 1 - j];
      j++
    ) {
      count++;
    }
    return count < 4 ? 'NO' : 'YES';
  },
};
