const { getPosition } = require('./B');

describe('535A. Tavas and Nafas', () => {
  it.each`
    n    | num   | result
    ${1} | ${4}  | ${1}
    ${2} | ${7}  | ${2}
    ${3} | ${77} | ${6}
  `('Base test: $n', ({ num, result }) => {
    expect(getPosition(num)).toBe(result);
  });
});
