const { getCountOfOperations } = require('./B');

describe('102B. Sum of Digits', () => {
  it.each`
    n    | num    | result
    ${1} | ${0}   | ${0}
    ${2} | ${10}  | ${1}
    ${3} | ${991} | ${3}
  `('Base test: $n', ({ num, result }) => {
    expect(getCountOfOperations(num)).toBe(result);
  });
});
