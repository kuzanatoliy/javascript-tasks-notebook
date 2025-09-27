const { cutArray } = require('./A');

describe('2144A. Cut the Array', () => {
  it.each`
    n    | arr                   | result
    ${1} | ${[1, 2, 3, 4, 5, 6]} | ${[1, 2]}
    ${2} | ${[1, 3, 3, 7]}       | ${[0, 0]}
    ${3} | ${[2, 1, 0]}          | ${[1, 2]}
    ${4} | ${[7, 2, 6, 2, 4]}    | ${[1, 2]}
  `('Base test: $n', ({ arr, result }) => {
    expect(cutArray(arr)).toStrictEqual(result);
  });
});
