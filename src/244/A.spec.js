const { getRepresentation } = require('./A');

describe('244A. Dividing Orange', () => {
  it.each`
    n    | num  | k    | wish      | result
    ${1} | ${2} | ${2} | ${[4, 1]} | ${[[4, 2], [1, 3]]}
    ${2} | ${3} | ${1} | ${[2]}    | ${[[2, 1, 3]]}
  `('Base test: $n', ({ num, k, wish, result }) => {
    expect(getRepresentation(num, k, wish)).toStrictEqual(result);
  });
});
