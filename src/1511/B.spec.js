const { getNumbers } = require('./B');

describe('1511B. GCD Length', () => {
  it.each`
    n    | a    | b    | c    | result
    ${1} | ${2} | ${3} | ${1} | ${[10, 101]}
    ${2} | ${2} | ${2} | ${2} | ${[10, 20]}
    ${3} | ${6} | ${6} | ${2} | ${[100000, 100010]}
    ${4} | ${1} | ${1} | ${1} | ${[1, 2]}
  `('Base test: $n', ({ a, b, c, result }) => {
    expect(getNumbers(a, b, c)).toStrictEqual(result);
  });
});
