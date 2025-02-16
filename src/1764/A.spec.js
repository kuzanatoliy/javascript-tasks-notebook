const { getTheBestInterval } = require('./A');

describe('1764A. Divide and Conquer', () => {
  it.each`
    n    | arr                            | result
    ${1} | ${[1, 3, 2, 2, 4]}             | ${[1, 5]}
    ${2} | ${[1, 2, 3, 4, 5]}             | ${[1, 5]}
    ${3} | ${[2, 1, 2, 1]}                | ${[1, 4]}
    ${4} | ${[2, 3, 5]}                   | ${[1, 3]}
    ${5} | ${[2, 2]}                      | ${[1, 2]}
    ${6} | ${[1]}                         | ${[1, 1]}
    ${7} | ${[9, 8, 5, 2, 1, 1, 2, 3, 3]} | ${[1, 9]}
  `('Base test: $n', ({ arr, result }) => {
    expect(getTheBestInterval(arr)).toStrictEqual(result);
  });
});
