const { getSegmentsCount } = require('./B');

describe('620B. Grandfather Dovlet’s calculator', () => {
  it.each`
    n    | x     | y     | result
    ${1} | ${1}  | ${3}  | ${12}
    ${2} | ${10} | ${15} | ${39}
  `('Base test: $n', ({ x, y, result }) => {
    expect(getSegmentsCount(x, y)).toBe(result);
  });
});
