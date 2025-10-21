const { getMaxCountOfArrays } = require('./C');

describe('2114C. Need More Arrays', () => {
  it.each`
    n    | arr                   | result
    ${1} | ${[1, 2, 3, 4, 5, 6]} | ${3}
    ${2} | ${[1, 2, 3]}          | ${2}
    ${3} | ${[1, 2, 2, 4]}       | ${2}
    ${4} | ${[2]}                | ${1}
    ${5} | ${[1, 4, 8]}          | ${3}
    ${6} | ${[1, 1]}             | ${1}
  `('Base test: $n', ({ arr, k, result }) => {
    expect(getMaxCountOfArrays(arr, k)).toStrictEqual(result);
  });
});
