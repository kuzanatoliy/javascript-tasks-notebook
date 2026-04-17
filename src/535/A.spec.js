const { turnNumber } = require('./A');

describe('535A. Tavas and Nafas', () => {
  it.each`
    n    | num   | result
    ${1} | ${6}  | ${'six'}
    ${2} | ${99} | ${'ninety-nine'}
    ${3} | ${20} | ${'twenty'}
  `('Base test: $n', ({ num, result }) => {
    expect(turnNumber(num)).toBe(result);
  });
});
