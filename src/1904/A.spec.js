const { getCountOfPositions } = require('./A');

describe('1904A. Forked!', () => {
  it.each`
    n    | step      | king      | queen     | result
    ${1} | ${[2, 1]} | ${[0, 0]} | ${[3, 3]} | ${2}
    ${2} | ${[1, 1]} | ${[3, 1]} | ${[1, 3]} | ${1}
    ${3} | ${[4, 4]} | ${[0, 0]} | ${[8, 0]} | ${2}
    ${4} | ${[4, 2]} | ${[1, 4]} | ${[3, 4]} | ${0}
  `('Base test: $n', ({ step, king, queen, result }) => {
    expect(getCountOfPositions(step, king, queen)).toBe(result);
  });
});
