const { getCountOfSubArrays } = require('./G');

describe('1692G. 2^Sort', () => {
  it.each`
    n    | array                             | k    | result
    ${1} | ${[20, 22, 19, 84]}               | ${2} | ${2}
    ${2} | ${[9, 5, 3, 2, 1]}                | ${1} | ${3}
    ${3} | ${[9, 5, 3, 2, 1]}                | ${2} | ${2}
    ${4} | ${[22, 12, 16, 4, 3, 22, 12]}     | ${2} | ${3}
    ${5} | ${[22, 12, 16, 4, 3, 22, 12]}     | ${3} | ${1}
    ${6} | ${[3, 9, 12, 3, 9, 12, 3, 9, 12]} | ${3} | ${0}
  `('Base test: $n', ({ array, k, result }) => {
    expect(getCountOfSubArrays(array, k)).toBe(result);
  });
});
