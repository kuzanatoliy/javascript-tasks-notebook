const { getParams } = require('./B');

describe('1843B. Long Long', () => {
  it.each`
    n    | array                          | result
    ${1} | ${[-1, 7, -4, -2, 5, -8]}      | ${[27, 3]}
    ${2} | ${[-1, 0, 0, -2, 1, 0, -3, 0]} | ${[7, 2]}
    ${3} | ${[2, -1, 0, -3, -7]}          | ${[13, 1]}
    ${4} | ${[0, -17, 0, 1, 0]}           | ${[18, 1]}
    ${5} | ${[-1, 0, -2, -1]}             | ${[4, 1]}
  `('Base test: $n', ({ array, result }) => {
    expect(getParams(array)).toStrictEqual(result);
  });
});
