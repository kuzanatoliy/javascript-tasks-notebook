const { getMinCount } = require('./A');

describe('1605A. A.M. Deviation', () => {
  it.each`
    n    | array        | result
    ${1} | ${[3, 4, 5]} | ${0}
    ${2} | ${[2, 2, 6]} | ${1}
    ${3} | ${[1, 6, 5]} | ${0}
  `('Base test: $n', ({ array, result }) => {
    expect(getMinCount(array)).toBe(result);
  });
});
