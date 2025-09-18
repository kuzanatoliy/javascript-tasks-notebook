module.exports = {
  getCountOfOperations: (num1, num2) => {
    if (num1 < num2) {
      const num = num2;
      num2 = num1;
      num1 = num;
    }
    let count = 0;
    while (num1 && num2) {
      count += Math.floor(num1 / num2);
      const d = num1 % num2;
      num1 = num2;
      num2 = d;
    }
    return count;
  },
};
