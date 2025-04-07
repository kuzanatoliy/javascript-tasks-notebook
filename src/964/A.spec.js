const { getCountOfDifferentWeight } = require('./A');

describe('964A. Splits', () => {
  it.each`
    n    | num  | result
    ${1} | ${7} | ${4}
    ${2} | ${8} | ${5}
    ${3} | ${9} | ${5}
  `('Base test: $n', ({ num, result }) => {
    expect(getCountOfDifferentWeight(num)).toBe(result);
  });
});
