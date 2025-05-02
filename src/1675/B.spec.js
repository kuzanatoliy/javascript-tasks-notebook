const { getCountOfOperations } = require('./B');

describe('1675B. Make It Increasing', () => {
  it.each`
    n    | arr                   | result
    ${1} | ${[3, 6, 5]}          | ${2}
    ${2} | ${[5, 3, 2, 1]}       | ${-1}
    ${3} | ${[1, 2, 3, 4, 5]}    | ${0}
    ${4} | ${[1000000000]}       | ${0}
    ${5} | ${[2, 8, 7, 5]}       | ${4}
    ${6} | ${[8, 26, 5, 21, 10]} | ${11}
    ${7} | ${[5, 14]}            | ${0}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCountOfOperations(arr)).toBe(result);
  });
});
