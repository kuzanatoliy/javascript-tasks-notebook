const { getPerfectArray } = require('./A');

describe('1438A. Specific Tastes of Andre', () => {
  it.each`
    n    | num  | result
    ${1} | ${1} | ${[1]}
    ${2} | ${2} | ${[1, 1]}
    ${3} | ${4} | ${[1, 1, 1, 1]}
  `('Base test: $n', ({ num, result }) => {
    expect(getPerfectArray(num)).toStrictEqual(result);
  });
});
