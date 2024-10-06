const { getStairways } = require('./A');

describe('1005A. Tanya and Stairways', () => {
  it.each`
    n    | arr                      | result
    ${1} | ${[1, 2, 3, 1, 2, 3, 4]} | ${[3, 4]}
    ${2} | ${[1, 1, 1, 1]}          | ${[1, 1, 1, 1]}
    ${3} | ${[1, 2, 3, 4, 5]}       | ${[5]}
    ${3} | ${[1, 2, 1, 2, 1]}       | ${[2, 2, 1]}
  `('Base test: $n', ({ arr, result }) => {
    expect(getStairways(arr)).toStrictEqual(result);
  });
});
