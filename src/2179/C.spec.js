const { getMaxK } = require('./C');

describe('2179C. Blackslex and Number Theory', () => {
  it.each`
    n    | arr                            | result
    ${1} | ${[5, 7, 9]}                   | ${5}
    ${2} | ${[2, 3]}                      | ${2}
    ${3} | ${[11, 74, 5, 22, 52, 97, 82]} | ${6}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMaxK(arr)).toBe(result);
  });
});
