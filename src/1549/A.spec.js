const { getPair } = require('./A');

describe('1549A. Gregor and Cryptography', () => {
  it.each`
    n    | array | result
    ${1} | ${17} | ${[2, 16]}
    ${2} | ${5}  | ${[2, 4]}
  `('Base test: $n', ({ array, result }) => {
    expect(getPair(array)).toStrictEqual(result);
  });
});
