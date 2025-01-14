const { createArray } = require('./A');

describe('1608A. Find Array', () => {
  it.each`
    n    | num  | result
    ${1} | ${1} | ${[2]}
    ${2} | ${2} | ${[2, 3]}
    ${3} | ${7} | ${[2, 3, 4, 5, 6, 7, 8]}
  `('Base test: $n', ({ num, result }) => {
    expect(createArray(num)).toStrictEqual(result);
  });
});
