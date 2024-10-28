const { getWinner } = require('./A');

describe('2033A. Sakurako and Kosuke', () => {
  it.each`
    n    | num   | result
    ${1} | ${1}  | ${'Kosuke'}
    ${2} | ${6}  | ${'Sakurako'}
    ${3} | ${3}  | ${'Kosuke'}
    ${4} | ${98} | ${'Sakurako'}
  `('Base test: $n', ({ num, result }) => {
    expect(getWinner(num)).toBe(result);
  });
});
