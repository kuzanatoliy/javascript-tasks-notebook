const { getKeys } = require('./A');

describe('1413A. Finding Sasuke', () => {
  it.each`
    n    | array           | result
    ${1} | ${[1, 100]}     | ${[-100, 1]}
    ${2} | ${[1, 2, 3, 6]} | ${[-6, -3, 2, 1]}
  `('Base test: $n', ({ array, result }) => {
    expect(getKeys(array)).toStrictEqual(result);
  });
});
