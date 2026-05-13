const { getCountOfOperations } = require('./A');

describe('862A. Between the Offices', () => {
  it.each`
    n    | x    | arr                | result
    ${1} | ${3} | ${[0, 4, 5, 6, 7]} | ${2}
    ${2} | ${0} | ${[0]}             | ${1}
    ${3} | ${0} | ${[1, 2, 3, 4, 5]} | ${0}
  `('Base test: $n', ({ x, arr, result }) => {
    expect(getCountOfOperations(x, arr)).toStrictEqual(result);
  });
});
