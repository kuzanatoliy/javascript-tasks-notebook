const { getChangesCount } = require('./A');

describe('371A. K-Periodic Array', () => {
  it.each`
    n    | k    | arr                            | result
    ${1} | ${2} | ${[2, 1, 2, 2, 2, 1]}          | ${1}
    ${2} | ${4} | ${[1, 1, 2, 1, 1, 1, 2, 1]}    | ${0}
    ${3} | ${3} | ${[2, 1, 1, 1, 2, 1, 1, 1, 2]} | ${3}
  `('Base test: $n', ({ k, arr, result }) => {
    expect(getChangesCount(k, arr)).toBe(result);
  });
});
