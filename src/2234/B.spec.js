const { getNumbers } = require('./B');

describe('2234B. Palindrome, Twelve and Two Terms', () => {
  it.each`
    n    | num                  | result
    ${1} | ${1n}                | ${[1n, 0n]}
    ${2} | ${10n}               | ${[-1n]}
    ${3} | ${310n}              | ${[22n, 288n]}
    ${4} | ${12n}               | ${[0n, 12n]}
    ${5} | ${1000000000n}       | ${[4n, 999999996n]}
    ${6} | ${6111111111111111n} | ${[3n, 6111111111111108n]}
  `('Base test: $n', ({ num, result }) => {
    expect(getNumbers(num)).toStrictEqual(result);
  });
});
