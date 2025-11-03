const { getCountOfVotes } = require('./A');

describe('272A. Dima and Friends', () => {
  it.each`
    n    | arr       | result
    ${1} | ${[1]}    | ${3}
    ${2} | ${[2]}    | ${2}
    ${3} | ${[3, 5]} | ${3}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCountOfVotes(arr)).toBe(result);
  });
});
