const { getMaxIncome } = require('./B');

describe('2036A. Quintomania', () => {
  it.each`
    n    | num       | drinks                       | result
    ${1} | ${3}      | ${[[2, 6], [2, 7], [1, 15]]} | ${28}
    ${2} | ${1}      | ${[[2, 6], [2, 7], [1, 15]]} | ${15}
    ${3} | ${6}      | ${[[1, 7], [2, 5]]}          | ${12}
    ${4} | ${190000} | ${[[1, 1000]]}               | ${1000}
  `('Base test: $n', ({ num, drinks, result }) => {
    expect(getMaxIncome(num, drinks)).toBe(result);
  });
});
