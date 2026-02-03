const { transformRate } = require('./B');

describe('1622B. Berland Music', () => {
  it.each`
    n    | arr                         | map           | result
    ${1} | ${[1, 2]}                   | ${'10'}       | ${[2, 1]}
    ${2} | ${[3, 1, 2]}                | ${'111'}      | ${[3, 1, 2]}
    ${3} | ${[2, 3, 1, 8, 5, 4, 7, 6]} | ${'01110001'} | ${[1, 6, 5, 8, 3, 2, 4, 7]}
  `('Base test: $n', ({ arr, map, result }) => {
    expect(transformRate(arr, map)).toStrictEqual(result);
  });
});
