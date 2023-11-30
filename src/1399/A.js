module.exports = {
  isPossibleStayOnlyOneElement: (numbers) => {
    const num = numbers.sort((x, y) => x - y);
    let j;
    for (j = 1; j < num.length; j++) {
      if (num[j] - num[j - 1] > 1) {
        break;
      }
    }
    return num.length === j ? 'YES' : 'NO';
  },
};
