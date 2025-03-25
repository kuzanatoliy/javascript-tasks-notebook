const { transformNum } = require('./A');

describe('1081A. Definite Game', () => {
  it.each`
    n    | num  | result
    ${1} | ${8} | ${1}
    ${2} | ${1} | ${1}
  `('Base test: $n', ({ num, result }) => {
    expect(transformNum(num)).toBe(result);
  });
});
