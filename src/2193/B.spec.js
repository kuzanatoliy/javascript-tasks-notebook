const { transformPermutation } = require('./B');

describe('2175C. Replace and Sum', () => {
  it.each`
    n    | arr             | result
    ${1} | ${[3, 2, 1, 4]} | ${[4, 1, 2, 3]}
    ${2} | ${[3, 1, 2]}    | ${[3, 2, 1]}
    ${3} | ${[4, 3, 2, 1]} | ${[4, 3, 2, 1]}
    ${4} | ${[2, 1]}       | ${[2, 1]}
  `('Base test: $n', ({ arr, result }) => {
    expect(transformPermutation(arr)).toStrictEqual(result);
  });
});
