const { buildOrder } = require('./D');

describe('2218D. The 67th OEIS Problem', () => {
  it.each`
    n    | num  | result
    ${1} | ${3} | ${[1, 3, 15]}
    ${2} | ${5} | ${[1, 3, 15, 35, 63]}
  `('Base test: $n', ({ num, result }) => {
    expect(buildOrder(num)).toStrictEqual(result);
  });
});
