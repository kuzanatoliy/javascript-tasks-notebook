const { getWayToAssignSeats } = require('./A');

describe('644A. Parliament of Berland', () => {
  it.each`
    n    | num   | r    | c    | result
    ${1} | ${3}  | ${2} | ${2} | ${[[1, 2], [0, 3]]}
    ${2} | ${8}  | ${4} | ${3} | ${[[1, 2, 3], [6, 5, 4], [7, 8, 0], [0, 0, 0]]}
    ${3} | ${10} | ${2} | ${2} | ${[[-1]]}
  `('Base test: $n', ({ num, r, c, result }) => {
    expect(getWayToAssignSeats(num, r, c)).toStrictEqual(result);
  });
});
