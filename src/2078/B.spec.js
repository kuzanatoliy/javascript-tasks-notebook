const { buildMap } = require('./B');

describe('2078B. Vicious Labyrinth', () => {
  it.each`
    n    | num  | k    | result
    ${1} | ${2} | ${1} | ${[2, 1]}
    ${2} | ${3} | ${2} | ${[2, 3, 2]}
  `('Base test: $n', ({ num, k, result }) => {
    expect(buildMap(num, k)).toStrictEqual(result);
  });
});
