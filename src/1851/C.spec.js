const { isItPossibleToBuildPass } = require('./C');

describe('1851C. Tiles Comeback', () => {
  it.each`
    n     | array                                         | k    | result
    ${1}  | ${[1, 1, 1, 1]}                               | ${2} | ${'YES'}
    ${2}  | ${[1, 2, 1, 1, 7, 5, 3, 3, 1, 3, 4, 4, 2, 4]} | ${3} | ${'YES'}
    ${3}  | ${[3, 1, 3]}                                  | ${3} | ${'NO'}
    ${4}  | ${[1, 2, 1, 2, 1, 2, 1, 2, 1, 2]}             | ${4} | ${'NO'}
    ${5}  | ${[1, 3, 4, 1, 6, 6]}                         | ${2} | ${'YES'}
    ${6}  | ${[1, 1]}                                     | ${2} | ${'YES'}
    ${7}  | ${[2, 1, 1, 1]}                               | ${2} | ${'NO'}
    ${8}  | ${[1, 2]}                                     | ${1} | ${'YES'}
    ${9}  | ${[2, 2, 2]}                                  | ${2} | ${'YES'}
    ${10} | ${[1, 1, 2, 2]}                               | ${1} | ${'YES'}
  `('Base test: $n', ({ array, k, result }) => {
    expect(isItPossibleToBuildPass(array, k)).toBe(result);
  });
});
