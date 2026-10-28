const { buildArray } = require('./A');

describe('1685A. Circular Local MiniMax', () => {
  it.each`
    n    | arr                         | result
    ${1} | ${[1, 1, 2]}                | ${['NO']}
    ${2} | ${[1, 9, 8, 4]}             | ${['YES', [1, 8, 4, 9]]}
    ${3} | ${[2, 0, 2, 2]}             | ${['NO']}
    ${4} | ${[1, 1, 1, 11, 111, 1111]} | ${['YES', [1, 11, 1, 111, 1, 1111]]}
  `('Base test: $n', ({ arr, result }) => {
    expect(buildArray(arr)).toStrictEqual(result);
  });
});
