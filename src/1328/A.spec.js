const { checkDivisibilityProblem } = require('./A');

describe('1328A. Divisibility Problem', () => {
  it.each`
    n    | number1 | number2 | result
    ${1} | ${10}   | ${4}    | ${2}
    ${2} | ${13}   | ${9}    | ${5}
    ${3} | ${100}  | ${13}   | ${4}
    ${4} | ${123}  | ${456}  | ${333}
    ${5} | ${92}   | ${46}   | ${0}
  `('Base test: $n', ({ number1, number2, result }) => {
    expect(checkDivisibilityProblem(number1, number2)).toBe(result);
  });
});
