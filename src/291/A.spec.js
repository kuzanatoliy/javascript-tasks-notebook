const { getPairCount } = require('./A');

describe('291A. Spyke Talks', () => {
  it.each`
    n    | arr                    | result
    ${1} | ${[0, 1, 7, 1, 7, 10]} | ${2}
    ${2} | ${[1, 1, 1]}           | ${-1}
    ${3} | ${[0]}                 | ${0}
  `('Base test: $n', ({ arr, result }) => {
    expect(getPairCount(arr)).toBe(result);
  });
});
