const { getPairs } = require('./B');

describe('648B. Собери стол', () => {
  it.each`
    n    | number                | result
    ${1} | ${[1, 3, 2, 4, 5, 3]} | ${[[1, 5], [2, 4], [3, 3]]}
    ${2} | ${[1, 1, 1, 2, 2, 2]} | ${[[1, 2], [1, 2], [1, 2]]}
  `('Base test: $n', ({ number, result }) => {
    expect(getPairs(number)).toStrictEqual(result);
  });
});
