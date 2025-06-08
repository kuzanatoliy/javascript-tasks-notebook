const { getFlatCounts } = require('./A');

describe('1430A. Number of Apartments', () => {
  it.each`
    n    | num   | result
    ${1} | ${30} | ${[10, 0, 0]}
    ${2} | ${67} | ${[20, 0, 1]}
    ${1} | ${4}  | ${[-1]}
    ${2} | ${14} | ${[3, 1, 0]}
  `('Base test: $n', ({ num, result }) => {
    expect(getFlatCounts(num)).toStrictEqual(result);
  });
});
