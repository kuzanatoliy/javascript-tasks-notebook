const { getVotingResult } = require('./A');

describe('1173A. Nauuo and Votes', () => {
  it.each`
    n    | x    | y    | z    | result
    ${1} | ${3} | ${7} | ${0} | ${'-'}
    ${2} | ${2} | ${0} | ${1} | ${'+'}
    ${3} | ${1} | ${1} | ${0} | ${'0'}
    ${4} | ${0} | ${0} | ${1} | ${'?'}
  `('Base test: $n', ({ x, y, z, result }) => {
    expect(getVotingResult(x, y, z)).toBe(result);
  });
});
