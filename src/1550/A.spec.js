const { getLength } = require('./A');

describe('1550A. Find The Array', () => {
  it.each`
    n    | number | result
    ${1} | ${1}   | ${1}
    ${2} | ${8}   | ${3}
    ${3} | ${7}   | ${3}
    ${4} | ${42}  | ${7}
  `('Base test: $n', ({ number, result }) => {
    expect(getLength(number)).toBe(result);
  });
});
