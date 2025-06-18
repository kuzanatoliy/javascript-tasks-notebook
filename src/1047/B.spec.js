const { getLength } = require('./B');

describe('1047B. Cover Points', () => {
  it.each`
    n    | points                              | result
    ${1} | ${[[1, 1], [1, 2], [2, 1]]}         | ${3}
    ${2} | ${[[1, 1], [1, 2], [2, 1], [2, 2]]} | ${4}
  `('Base test: $n', ({ points, result }) => {
    expect(getLength(points)).toBe(result);
  });
});
