const { getCountOfShots } = require('./B');

describe('514B. Han Solo and Lazer Gun', () => {
  it.each`
    n    | center    | points                      | result
    ${1} | ${[0, 0]} | ${[[1, 1], [2, 2], [2, 0]]} | ${2}
    ${2} | ${[1, 2]} | ${[[1, 1], [1, 0]]}         | ${1}
  `('Base test: $n', ({ center, points, result }) => {
    expect(getCountOfShots(center, points)).toBe(result);
  });
});
