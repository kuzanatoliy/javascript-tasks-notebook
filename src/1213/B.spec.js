const { getBadDaysCount } = require('./B');

describe('1213A. Chips Moving', () => {
  it.each`
    n    | arr                                         | result
    ${1} | ${[3, 9, 4, 6, 7, 5]}                       | ${3}
    ${2} | ${[1000000]}                                | ${0}
    ${3} | ${[2, 1]}                                   | ${1}
    ${4} | ${[31, 41, 59, 26, 53, 58, 97, 93, 23, 84]} | ${8}
    ${5} | ${[3, 2, 1, 2, 3, 4, 5]}                    | ${2}
  `('Base test: $n', ({ arr, result }) => {
    expect(getBadDaysCount(arr)).toBe(result);
  });
});
