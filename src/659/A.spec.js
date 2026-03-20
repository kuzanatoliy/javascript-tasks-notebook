const { getEntranceNumber } = require('./A');

describe('659A. Round House', () => {
  it.each`
    n    | num  | a    | b     | result
    ${1} | ${6} | ${2} | ${-5} | ${3}
    ${2} | ${5} | ${1} | ${3}  | ${4}
    ${3} | ${3} | ${2} | ${7}  | ${3}
  `('Base test: $n', ({ num, a, b, result }) => {
    expect(getEntranceNumber(num, a, b)).toBe(result);
  });
});
