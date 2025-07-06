const { getWinner } = require('./A');

describe('2123A. Blackboard Game', () => {
  it.each`
    n    | num    | result
    ${1} | ${2}   | ${'Alice'}
    ${2} | ${4}   | ${'Bob'}
    ${3} | ${5}   | ${'Alice'}
    ${4} | ${7}   | ${'Alice'}
    ${5} | ${100} | ${'Bob'}
  `('Base test: $n', ({ num, result }) => {
    expect(getWinner(num)).toBe(result);
  });
});
