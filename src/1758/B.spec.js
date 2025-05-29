const { getArray } = require('./B');

describe('1758B. XOR = Average', () => {
  it.each`
    n    | num  | result
    ${1} | ${1} | ${[1]}
    ${2} | ${4} | ${[1, 3, 2, 2]}
    ${3} | ${3} | ${[1, 1, 1]}
  `('Base test: $n', ({ num, result }) => {
    expect(getArray(num)).toStrictEqual(result);
  });
});
