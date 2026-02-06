const { getTotalDissatisfaction } = require('./A');

describe('1539A. Contest Start', () => {
  it.each`
    n    | num            | x     | t              | result
    ${1} | ${4n}          | ${2n} | ${5n}          | ${5n}
    ${2} | ${3n}          | ${1n} | ${2n}          | ${3n}
    ${3} | ${3n}          | ${3n} | ${10n}         | ${3n}
    ${4} | ${2000000000n} | ${1n} | ${2000000000n} | ${1999999999000000000n}
  `('Base test: $n', ({ num, x, t, result }) => {
    expect(getTotalDissatisfaction(num, x, t)).toBe(result);
  });
});
