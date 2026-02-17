const { getMinSum } = require('./B');

describe('2124B. Minimise Sum', () => {
  it.each`
    n    | arr             | result
    ${1} | ${[1, 2]}       | ${2}
    ${2} | ${[1, 2, 3]}    | ${2}
    ${3} | ${[3, 0, 2, 3]} | ${3}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMinSum(arr)).toStrictEqual(result);
  });
});
