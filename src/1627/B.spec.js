const { getDistances } = require('./B');

describe('1627B. Not Sitting', () => {
  it.each`
    n    | r    | c    | result
    ${1} | ${4} | ${3} | ${[3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5]}
    ${2} | ${1} | ${2} | ${[1, 1]}
  `('Base test: $n', ({ r, c, result }) => {
    expect(getDistances(r, c)).toStrictEqual(result);
  });
});
