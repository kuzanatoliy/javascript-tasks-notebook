const { getPositions } = require('./B');

describe('1020B. Badge', () => {
  it.each`
    n    | arr          | result
    ${1} | ${[2, 3, 2]} | ${[2, 2, 3]}
    ${2} | ${[1, 2, 3]} | ${[1, 2, 3]}
  `('Base test: $n', ({ arr, result }) => {
    expect(getPositions(arr)).toStrictEqual(result);
  });
});
