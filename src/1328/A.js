module.exports = {
  checkDivisibilityProblem: (number1, number2) =>
    number2 - (number1 % number2 || number2),
};
