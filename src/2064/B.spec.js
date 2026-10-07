const { transformArray } = require('./B');

describe('2064B. Variety is Discouraged', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[1]}             | ${[1, 1]}
    ${2} | ${[1, 1, 1, 1, 1]} | ${[0]}
    ${3} | ${[2, 1, 3, 2]}    | ${[2, 3]}
  `('Base test: $n', ({ arr, result }) => {
    expect(transformArray(arr)).toStrictEqual(result);
  });
});
