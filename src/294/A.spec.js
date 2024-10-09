const { getCountOfBirds } = require('./A');

describe('294A. Shaass and Oskols', () => {
  it.each`
    n    | arr                     | steps                                          | result
    ${1} | ${[10, 10, 10, 10, 10]} | ${[[2, 5], [3, 13], [2, 12], [1, 13], [4, 6]]} | ${[0, 12, 5, 0, 16]}
    ${2} | ${[2, 4, 1]}            | ${[[2, 2]]}                                    | ${[3, 0, 3]}
  `('Base test: $n', ({ arr, steps, result }) => {
    expect(getCountOfBirds(arr, steps)).toStrictEqual(result);
  });
});
