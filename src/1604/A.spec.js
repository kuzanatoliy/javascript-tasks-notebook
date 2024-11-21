const { getCountOfOperations } = require('./A');

describe('1604A. Era', () => {
  it.each`
    n    | arr                   | result
    ${1} | ${[1, 3, 4]}          | ${1}
    ${2} | ${[1, 2, 5, 7, 4]}    | ${3}
    ${3} | ${[1]}                | ${0}
    ${4} | ${[69, 6969, 696969]} | ${696966}
    ${5} | ${[1, 1, 2]}          | ${0}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCountOfOperations(arr)).toBe(result);
  });
});
