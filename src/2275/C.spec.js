const { getPairsCount } = require('./C');

describe('2275C. Unrequited Love', () => {
  it.each`
    n    | map                                              | result
    ${1} | ${[5, 1, 4, 2, 2, -4]}                           | ${1}
    ${2} | ${[0, 0, 0, 0, 0, 0, 0]}                         | ${2}
    ${3} | ${[-4, 3, 0, -4, -4, -1, -4, 1, -3, -2, -2, -1]} | ${5}
  `('Base test: $n', ({ map, result }) => {
    expect(getPairsCount(map)).toStrictEqual(result);
  });
});
