const { getBeautifulArray } = require('./B');

describe('1463B. Find The Array', () => {
  it.each`
    n    | array                 | result
    ${1} | ${[1, 2, 3, 4, 5]}    | ${[1, 2, 1, 4, 1]}
    ${2} | ${[4, 6]}             | ${[1, 6]}
    ${3} | ${[1, 1000000000]}    | ${[1, 1000000000]}
    ${4} | ${[3, 4, 8, 1, 2, 3]} | ${[1, 4, 1, 1, 1, 3]}
  `('Base test: $n', ({ array, result }) => {
    expect(getBeautifulArray(array)).toStrictEqual(result);
  });
});
