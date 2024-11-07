const { getCountOfTeams } = require('./A');

describe('1249A. Yet Another Dividing into Teams', () => {
  it.each`
    n    | array                 | result
    ${1} | ${[2, 10, 1, 20]}     | ${2}
    ${2} | ${[3, 6]}             | ${1}
    ${3} | ${[2, 3, 4, 99, 100]} | ${2}
    ${4} | ${[42]}               | ${1}
  `('Base test: $n', ({ array, result }) => {
    expect(getCountOfTeams(array)).toBe(result);
  });
});
