const { getDigits } = require('./A');

describe('1104A. Splitting into digits', () => {
  it.each`
    n    | num   | result
    ${1} | ${1}  | ${[1]}
    ${2} | ${4}  | ${[1, 1, 1, 1]}
    ${3} | ${27} | ${[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
  `('Base test: $n', ({ num, result }) => {
    expect(getDigits(num)).toStrictEqual(result);
  });
});
