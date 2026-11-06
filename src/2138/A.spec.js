const { getOperations } = require('./A');

describe('2138A. Cake Assignment', () => {
  it.each`
    n    | k     | x     | result
    ${1} | ${2n} | ${3n} | ${[2, 1]}
    ${2} | ${2n} | ${4n} | ${[]}
    ${3} | ${3n} | ${7n} | ${[2, 2, 1]}
    ${4} | ${2n} | ${5n} | ${[1, 2]}
  `('Base test: $n', ({ k, x, result }) => {
    expect(getOperations(k, x)).toStrictEqual(result);
  });
});
