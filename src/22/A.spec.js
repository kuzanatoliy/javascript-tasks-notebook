const { getSecondOrderStatistic } = require('./A');

describe('22A. Second Order Statistics', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[1, 2, 2, -4]}   | ${1}
    ${2} | ${[1, 2, 3, 1, 1]} | ${2}
    ${3} | ${[1, 1, 1]}       | ${'NO'}
  `('Base test: $n', ({ arr, result }) => {
    expect(getSecondOrderStatistic(arr)).toStrictEqual(result);
  });
});
