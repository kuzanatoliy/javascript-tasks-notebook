const { buildArray } = require('./B');

describe('2131B. Alternating Series', () => {
  it.each`
    n    | num  | result
    ${1} | ${2} | ${[-1, 2]}
    ${2} | ${3} | ${[-1, 3, -1]}
  `('Base test: $n', ({ num, result }) => {
    expect(buildArray(num)).toStrictEqual(result);
  });
});
