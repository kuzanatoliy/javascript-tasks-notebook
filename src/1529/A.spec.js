const { getCountOfRemovedElements } = require('./A');

describe('1529A. Eshag Loves Big Arrays', () => {
  it.each`
    n    | array                 | result
    ${1} | ${[1, 1, 1, 2, 2, 3]} | ${3}
    ${2} | ${[9, 9, 9, 9, 9, 9]} | ${0}
    ${3} | ${[6, 4, 1, 1, 4, 1]} | ${3}
  `('Base test: $n', ({ array, result }) => {
    expect(getCountOfRemovedElements(array)).toBe(result);
  });
});
