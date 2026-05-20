const { getBalloonCounts } = require('./A');

describe('998A. Balloons', () => {
  it.each`
    n    | arr          | result
    ${1} | ${[1, 2, 1]} | ${[1, 1]}
    ${2} | ${[10]}      | ${[-1]}
    ${3} | ${[5, 5]}    | ${[-1]}
  `('Base test: $n', ({ arr, result }) => {
    expect(getBalloonCounts(arr)).toStrictEqual(result);
  });
});
