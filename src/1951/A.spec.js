const { isItPossibleToReachConfiguration } = require('./A');

describe('1951A. Dual Trigger', () => {
  it.each`
    n    | map               | result
    ${1} | ${'1101010110'}   | ${'YES'}
    ${2} | ${'1001001110'}   | ${'NO'}
    ${3} | ${'000000'}       | ${'YES'}
    ${4} | ${'1'}            | ${'NO'}
    ${5} | ${'111111111111'} | ${'YES'}
  `('Base test: $n', ({ map, result }) => {
    expect(isItPossibleToReachConfiguration(map)).toBe(result);
  });
});
