const { getMaxSizes } = require('./B');

describe('1706B. Making Towers', () => {
  it.each`
    n    | arr                         | result
    ${1} | ${[1, 2, 3, 1, 2, 3, 1]}    | ${[3, 2, 2, 0, 0, 0, 0]}
    ${2} | ${[4, 2, 2, 2, 4, 4]}       | ${[0, 3, 0, 2, 0, 0]}
    ${3} | ${[1]}                      | ${[1]}
    ${4} | ${[5, 4, 5, 3, 5]}          | ${[0, 0, 1, 1, 1]}
    ${5} | ${[3, 3, 3, 1, 3, 3]}       | ${[1, 0, 4, 0, 0, 0]}
    ${6} | ${[1, 2, 3, 4, 4, 3, 2, 1]} | ${[2, 2, 2, 2, 0, 0, 0, 0]}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMaxSizes(arr)).toStrictEqual(result);
  });
});
