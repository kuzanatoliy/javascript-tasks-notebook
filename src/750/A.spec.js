const { getCountOfSolvedProblems } = require('./A');

describe('750A. New Year and Hurry', () => {
  it.each`
    n    | problems | wayTime | result
    ${1} | ${3}     | ${222}  | ${2}
    ${2} | ${4}     | ${190}  | ${4}
    ${3} | ${7}     | ${1}    | ${7}
  `('Base test: $n', ({ problems, wayTime, result }) => {
    expect(getCountOfSolvedProblems(problems, wayTime)).toBe(result);
  });
});
