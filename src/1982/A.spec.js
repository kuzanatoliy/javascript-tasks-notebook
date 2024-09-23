const { isItPossibleToMeetRequirements } = require('./A');

describe('1982A. Soccer', () => {
  it.each`
    n    | score1            | score2                     | result
    ${1} | ${[1, 0]}         | ${[5, 0]}                  | ${'YES'}
    ${2} | ${[1, 2]}         | ${[3, 2]}                  | ${'NO'}
    ${3} | ${[1, 2]}         | ${[4, 5]}                  | ${'YES'}
    ${4} | ${[1, 2]}         | ${[4, 3]}                  | ${'NO'}
    ${5} | ${[1, 2]}         | ${[1, 2]}                  | ${'YES'}
    ${6} | ${[998244353, 0]} | ${[1000000000, 999999999]} | ${'YES'}
  `('Base test: $n', ({ score1, score2, result }) => {
    expect(isItPossibleToMeetRequirements(score1, score2)).toBe(result);
  });
});
