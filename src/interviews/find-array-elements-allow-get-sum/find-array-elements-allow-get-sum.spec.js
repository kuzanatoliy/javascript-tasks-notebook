const {
  findArrayElementsAllowGetSum,
} = require('./find-array-elements-allow-get-sum');

describe('findArrayElementsAllowGetSum', () => {
  it.each`
    n    | arr                       | sum   | result
    ${1} | ${[1, 2, 2, 5, 6, 9, 11]} | ${4}  | ${[2, 2]}
    ${2} | ${[1, 2, 2, 5, 6, 9, 11]} | ${13} | ${[2, 11]}
    ${3} | ${[1]}                    | ${10} | ${-1}
    ${4} | ${[1, 2, 2, 5, 6, 9, 11]} | ${50} | ${-1}
  `('Base test: $n', ({ arr, sum, result }) => {
    expect(findArrayElementsAllowGetSum(arr, sum)).toStrictEqual(result);
  });
});
