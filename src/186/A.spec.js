const { isOneRace } = require('./A');

describe('186A. Comparing Strings', () => {
  it.each`
    n    | g1             | g2             | result
    ${1} | ${'ab'}        | ${'ba'}        | ${'YES'}
    ${2} | ${'aa'}        | ${'ab'}        | ${'NO'}
    ${3} | ${'rtfabanpc'} | ${'atfabrnpc'} | ${'YES'}
    ${4} | ${'ab'}        | ${'aba'}       | ${'NO'}
  `('Base test: $n', ({ g1, g2, result }) => {
    expect(isOneRace(g1, g2)).toStrictEqual(result);
  });
});
