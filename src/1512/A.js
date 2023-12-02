module.exports = {
  getIndexOfNotEqualElement: (numbers) => {
    if (numbers[0] === numbers[1] && numbers[1] === numbers[2]) {
      for (let i = 3; i < numbers.length; i++) {
        if (numbers[i] !== numbers[0]) {
          return i + 1;
        }
      }
    } else {
      if (numbers[0] !== numbers[1] && numbers[0] !== numbers[2]) {
        return 1;
      }
      if (numbers[1] !== numbers[0] && numbers[1] !== numbers[2]) {
        return 2;
      }
      if (numbers[2] !== numbers[0] && numbers[2] !== numbers[1]) {
        return 3;
      }
    }
    return 0;
  },
};
