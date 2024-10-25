const { getIsolatedCell } = require('./A');

describe('1736A. Immobile Knight', () => {
  it.each`
    n    | row  | col  | result
    ${1} | ${1} | ${7} | ${[1, 1]}
    ${2} | ${8} | ${8} | ${[8, 8]}
    ${3} | ${3} | ${3} | ${[2, 2]}
  `('Base test: $n', ({ row, col, result }) => {
    expect(getIsolatedCell(row, col)).toStrictEqual(result);
  });
});
