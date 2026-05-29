const { getDelay } = require('./A');

describe('920A. Water The Garden', () => {
  it.each`
    n    | num  | arr          | result
    ${1} | ${5} | ${[3]}       | ${3}
    ${2} | ${3} | ${[1, 2, 3]} | ${1}
    ${2} | ${4} | ${[1]}       | ${4}
  `('Base test: $n', ({ num, arr, result }) => {
    expect(getDelay(num, arr)).toBe(result);
  });
});
