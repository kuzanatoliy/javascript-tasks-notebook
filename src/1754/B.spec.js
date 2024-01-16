const { getNumbers } = require('./B');

describe('1754B. Kevin and Permutation', () => {
  it.each`
    n    | number | result
    ${1} | ${4}   | ${[3, 1, 4, 2]}
    ${2} | ${3}   | ${[2, 1, 3]}
  `('Base test: $n', ({ number, result }) => {
    expect(getNumbers(number)).toStrictEqual(result);
  });
});
