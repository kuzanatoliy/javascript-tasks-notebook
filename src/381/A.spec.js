const { getPoints } = require('./A');

describe('381A. Magnets', () => {
  it.each`
    n    | cards                    | result
    ${1} | ${[4, 1, 2, 10]}         | ${[12, 5]}
    ${2} | ${[1, 2, 3, 4, 5, 6, 7]} | ${[16, 12]}
  `('Base test: $n', ({ cards, result }) => {
    expect(getPoints(cards)).toStrictEqual(result);
  });
});
