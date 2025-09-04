const { getSum } = require('./A');

describe('2130A. Submission is All You Need', () => {
  it.each`
    n    | arr          | result
    ${1} | ${[0, 1, 1]} | ${3}
    ${2} | ${[1, 2, 3]} | ${6}
    ${3} | ${[0, 0]}    | ${2}
  `('Base test: $n', ({ arr, result }) => {
    expect(getSum(arr)).toBe(result);
  });
});
