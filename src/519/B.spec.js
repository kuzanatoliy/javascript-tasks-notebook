const { getNumbers } = require('./B');

describe('519B. A and B and Compilation Errors', () => {
  it.each`
    n    | errors                                                 | result
    ${1} | ${[[1, 5, 8, 123, 7], [123, 7, 5, 1], [5, 1, 7]]}      | ${[8, 123]}
    ${2} | ${[[1, 4, 3, 3, 5, 7], [3, 7, 5, 4, 3], [4, 3, 7, 5]]} | ${[1, 3]}
  `('Base test: $n', ({ errors, result }) => {
    expect(getNumbers(errors)).toStrictEqual(result);
  });
});
