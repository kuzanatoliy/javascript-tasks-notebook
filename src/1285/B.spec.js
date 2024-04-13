const { isSumGreaterThanSubSum } = require('./B');

describe('1285B. Just Eat It!', () => {
  it.each`
    n    | array           | result
    ${1} | ${[1, 2, 3, 4]} | ${'YES'}
    ${2} | ${[7, 4, -1]}   | ${'NO'}
    ${3} | ${[5, -5, 5]}   | ${'NO'}
  `('Base test: $n', ({ array, result }) => {
    expect(isSumGreaterThanSubSum(array)).toBe(result);
  });
});
