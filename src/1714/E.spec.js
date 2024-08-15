const { isItPossibleToGetEqualArray } = require('./E');

describe('1714E. Add Modulo 10', () => {
  it.each`
    n     | array                | result
    ${1}  | ${[6, 11]}           | ${'YES'}
    ${2}  | ${[2, 18, 22]}       | ${'NO'}
    ${3}  | ${[5, 10, 5, 10, 5]} | ${'YES'}
    ${4}  | ${[1, 2, 4, 8]}      | ${'YES'}
    ${5}  | ${[4, 5]}            | ${'NO'}
    ${6}  | ${[93, 96, 102]}     | ${'YES'}
    ${7}  | ${[40, 6]}           | ${'NO'}
    ${8}  | ${[50, 30]}          | ${'NO'}
    ${9}  | ${[22, 44]}          | ${'YES'}
    ${10} | ${[1, 5]}            | ${'NO'}
  `('Base test: $n', ({ array, result }) => {
    expect(isItPossibleToGetEqualArray(array)).toBe(result);
  });
});
