const { checkPathInRingroad } = require('./B');

describe('339B. Xenia and Ringroad', () => {
  it.each`
    n    | number | array        | result
    ${1} | ${4}   | ${[3, 2, 3]} | ${6}
    ${2} | ${4}   | ${[2, 3, 3]} | ${2}
  `('Base test: $n', ({ number, array, result }) => {
    expect(checkPathInRingroad(number, array)).toBe(result);
  });
});
