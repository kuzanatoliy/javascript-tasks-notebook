const { getOriginNumber } = require('./A');

describe('1625A. Ancient Civilization', () => {
  it.each`
    n    | arr                                | result
    ${1} | ${[18, 9, 21]}                     | ${17}
    ${2} | ${[18, 18, 18]}                    | ${18}
    ${3} | ${[1]}                             | ${1}
    ${4} | ${[1, 2, 3, 4, 5]}                 | ${1}
    ${5} | ${[99, 35, 85, 46, 78, 55]}        | ${39}
    ${6} | ${[0, 1]}                          | ${0}
    ${7} | ${[5, 16, 42, 15, 83, 65, 78, 42]} | ${2}
  `('Base test: $n', ({ arr, result }) => {
    expect(getOriginNumber(arr)).toBe(result);
  });
});
