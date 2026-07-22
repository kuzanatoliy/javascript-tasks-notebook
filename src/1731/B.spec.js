const { getCount } = require('./B');

describe('1731B. Kill Demodogs', () => {
  it.each`
    n    | num            | result
    ${1} | ${2n}          | ${14154n}
    ${2} | ${3n}          | ${44484n}
    ${3} | ${50n}         | ${171010650n}
    ${4} | ${1000000000n} | ${999589541n}
  `('Base test: $n', ({ num, result }) => {
    expect(getCount(num)).toBe(result);
  });
});
