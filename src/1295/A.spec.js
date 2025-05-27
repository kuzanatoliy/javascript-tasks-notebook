const { generateNumber } = require('./A');

describe('1295A. Display The Number', () => {
  it.each`
    n    | num  | result
    ${1} | ${3} | ${'7'}
    ${2} | ${4} | ${'11'}
  `('Base test: $n', ({ num, result }) => {
    expect(generateNumber(num)).toBe(result);
  });
});
