const { getCountOfGrannies } = require('./B');

describe('1358B. Maria Breaks the Self-isolation', () => {
  it.each`
    n    | arr                   | result
    ${1} | ${[1, 1, 2, 2, 1]}    | ${6}
    ${2} | ${[2, 3, 4, 5, 6, 7]} | ${1}
    ${3} | ${[1, 5, 4, 5, 1, 9]} | ${6}
    ${4} | ${[1, 2, 3, 5, 6]}    | ${4}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCountOfGrannies(arr)).toBe(result);
  });
});
