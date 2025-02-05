const { getCountOfTurns } = require('./A');

describe('1093A. Dice Rolling', () => {
  it.each`
    n    | num    | result
    ${1} | ${2}   | ${1}
    ${2} | ${13}  | ${2}
    ${3} | ${37}  | ${6}
    ${4} | ${100} | ${15}
  `('Base test: $n', ({ num, result }) => {
    expect(getCountOfTurns(num)).toBe(result);
  });
});
