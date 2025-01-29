const { getCountOfOperations } = require('./A');

describe('2031A. Penchick and Modern Monument', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[5, 4, 3, 2, 1]} | ${4}
    ${2} | ${[2, 2, 1]}       | ${1}
    ${3} | ${[1]}             | ${0}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCountOfOperations(arr)).toStrictEqual(result);
  });
});
