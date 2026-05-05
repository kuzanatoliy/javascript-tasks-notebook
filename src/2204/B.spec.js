const { getCountOfOperations } = require('./B');

describe('2204B. Right Maximum', () => {
  it.each`
    n    | arr                   | result
    ${1} | ${[2, 1, 2, 3, 1]}    | ${3}
    ${2} | ${[1, 2, 3, 4, 5, 6]} | ${6}
    ${3} | ${[3, 2, 1]}          | ${1}
    ${4} | ${[1, 3, 3, 1]}       | ${3}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCountOfOperations(arr)).toBe(result);
  });
});
