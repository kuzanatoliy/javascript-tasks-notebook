const { isItPossibleToGetOddSum } = require('./A');

describe('1780A. Hayato and School', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[1, 1, 1]}       | ${['YES', [1, 2, 3]]}
    ${2} | ${[1, 1, 2, 2]}    | ${['YES', [3, 4, 1]]}
    ${3} | ${[1, 2, 3]}       | ${['NO']}
    ${4} | ${[1, 4, 5, 1, 2]} | ${['YES', [2, 5, 1]]}
    ${5} | ${[2, 6, 2, 4]}    | ${['NO']}
    ${6} | ${[5, 6, 3, 2, 1]} | ${['YES', [2, 4, 1]]}
  `('Base test: $n', ({ arr, result }) => {
    expect(isItPossibleToGetOddSum(arr)).toStrictEqual(result);
  });
});
