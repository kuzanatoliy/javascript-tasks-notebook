const { getMaxScore } = require('./A');

describe('2030A. A Gift From Orangutan', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[69]}            | ${0}
    ${2} | ${[7, 6, 5]}       | ${4}
    ${3} | ${[1, 1, 1, 2, 2]} | ${4}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMaxScore(arr)).toBe(result);
  });
});
