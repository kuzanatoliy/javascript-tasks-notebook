const { getCountOfTeams } = require('./C');

describe('1380C. Create The Teams', () => {
  it.each`
    n    | array               | power | result
    ${1} | ${[7, 11, 2, 9, 5]} | ${10} | ${2}
    ${2} | ${[2, 4, 2, 3]}     | ${8}  | ${1}
    ${3} | ${[1, 3, 3, 7]}     | ${11} | ${0}
  `('Base test: $n', ({ array, power, result }) => {
    expect(getCountOfTeams(array, power)).toBe(result);
  });
});
