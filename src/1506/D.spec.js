const { getCountOfSurvivers } = require('./D');

describe('1506C. Double-ended Strings', () => {
  it.each`
    n    | array                 | result
    ${1} | ${[1, 6, 1, 1, 4, 4]} | ${0}
    ${2} | ${[1, 2]}             | ${0}
    ${3} | ${[1, 1]}             | ${2}
    ${4} | ${[4, 5, 4, 5, 4]}    | ${1}
    ${5} | ${[2, 3, 2, 1, 3, 1]} | ${0}
    ${6} | ${[1, 2, 3]}          | ${1}
  `('Base test: $n', ({ array, result }) => {
    expect(getCountOfSurvivers(array)).toBe(result);
  });
});
