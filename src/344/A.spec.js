const { checkMagnetsGroups } = require('./A');

describe('344A. Magnets', () => {
  it.each`
    n    | magnets                                 | result
    ${1} | ${['10', '10', '10', '01', '10', '10']} | ${3}
    ${2} | ${['01', '01', '10', '10']}             | ${2}
  `('Base test: $n', ({ magnets, result }) => {
    expect(checkMagnetsGroups(magnets)).toBe(result);
  });
});
