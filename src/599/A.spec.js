const { getDistance } = require('./A');

describe('599A. Patrick and Shopping', () => {
  it.each`
    n    | a     | b     | c     | result
    ${1} | ${10} | ${20} | ${30} | ${60}
    ${2} | ${1}  | ${1}  | ${5}  | ${4}
  `('Base test: $n', ({ a, b, c, result }) => {
    expect(getDistance(a, b, c)).toBe(result);
  });
});
