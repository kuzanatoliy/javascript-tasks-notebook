const { getCountOfCashes } = require('./A');

describe('237A. Free Cash', () => {
  it.each`
    n    | times                              | result
    ${1} | ${['8 0', '8 10', '8 10', '8 45']} | ${2}
    ${2} | ${['0 12', '10 11', '22 22']}      | ${1}
  `('Base test: $n', ({ times, result }) => {
    expect(getCountOfCashes(times)).toBe(result);
  });
});
