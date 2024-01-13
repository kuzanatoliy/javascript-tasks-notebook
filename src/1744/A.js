module.exports = {
  isPossibleToGetString: (numbers, string) => {
    const obj = {};
    let j;
    for (j = 0; j < numbers.length; j++) {
      if (obj[numbers[j]]) {
        if (obj[numbers[j]] !== string[j]) {
          break;
        }
      } else {
        obj[numbers[j]] = string[j];
      }
    }
    return j === numbers.length ? 'YES' : 'NO';
  },
};
