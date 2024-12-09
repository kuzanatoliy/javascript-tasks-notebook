const { getWinner } = require('./A');

describe('835A. Sasha and Sticks', () => {
  it.each`
    n    | s    | v1   | v2   | t1   | t2   | result
    ${1} | ${5} | ${1} | ${2} | ${1} | ${2} | ${'First'}
    ${2} | ${3} | ${3} | ${1} | ${1} | ${1} | ${'Second'}
    ${3} | ${4} | ${5} | ${3} | ${1} | ${5} | ${'Friendship'}
  `('Base test: $n', ({ s, v1, v2, t1, t2, result }) => {
    expect(getWinner(s, v1, v2, t1, t2)).toBe(result);
  });
});
