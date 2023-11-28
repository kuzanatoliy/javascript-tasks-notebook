const { checkBitPlusPlusValue } = require('./A');

describe('282A. Bit++', () => {
  it.each`
    n    | operations        | result
    ${1} | ${['++X']}        | ${1}
    ${2} | ${['X++', '--X']} | ${0}
  `('Base test: $n', ({ operations, result }) => {
    expect(checkBitPlusPlusValue(operations)).toBe(result);
  });
});
