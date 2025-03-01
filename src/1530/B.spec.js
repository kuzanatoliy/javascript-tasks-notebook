const { getMap } = require('./B');

describe('1530B. Putting Plates', () => {
  it.each`
    n    | rows | cols | result
    ${1} | ${3} | ${5} | ${[[1, 0, 1, 0, 1], [0, 0, 0, 0, 0], [1, 0, 1, 0, 1]]}
    ${2} | ${4} | ${4} | ${[[1, 0, 1, 0], [0, 0, 0, 0], [0, 0, 0, 0], [1, 0, 1, 0]]}
    ${3} | ${5} | ${6} | ${[[1, 0, 1, 0, 1, 0], [0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0], [1, 0, 1, 0, 1, 0]]}
  `('Base test: $n', ({ rows, cols, result }) => {
    expect(getMap(rows, cols)).toStrictEqual(result);
  });
});
