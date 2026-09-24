const { getPermutation } = require('./B');

describe('2071B. Perfecto', () => {
  it.each`
    n    | num  | result
    ${1} | ${1} | ${[-1]}
    ${2} | ${4} | ${[2, 1, 3, 4]}
    ${3} | ${5} | ${[2, 1, 3, 4, 5]}
  `('Base test: $n', ({ num, result }) => {
    expect(getPermutation(num)).toStrictEqual(result);
  });
});
