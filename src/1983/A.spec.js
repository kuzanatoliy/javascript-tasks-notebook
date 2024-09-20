const { getArray } = require('./A');

describe('1983A. Array Divisibility', () => {
  it.each`
    n    | num  | result
    ${1} | ${3} | ${[1, 2, 3]}
    ${2} | ${6} | ${[1, 2, 3, 4, 5, 6]}
    ${3} | ${7} | ${[1, 2, 3, 4, 5, 6, 7]}
  `('Base test: $n', ({ num, result }) => {
    expect(getArray(num)).toStrictEqual(result);
  });
});
