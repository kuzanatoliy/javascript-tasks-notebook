const { sortArray } = require('./B');

describe('1579B. Shifting Sort', () => {
  it.each`
    n    | string             | result
    ${1} | ${[2, 1]}          | ${[[1, 2, 1]]}
    ${2} | ${[1, 2, 1]}       | ${[[2, 3, 1]]}
    ${3} | ${[2, 4, 1, 3]}    | ${[[1, 3, 2], [3, 4, 1]]}
    ${4} | ${[2, 5, 1, 4, 3]} | ${[[1, 3, 2], [3, 5, 2], [4, 5, 1]]}
  `('Base test: $n', ({ string, result }) => {
    expect(sortArray(string)).toStrictEqual(result);
  });
});
