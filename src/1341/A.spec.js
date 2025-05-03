const { isItCorrectWeight } = require('./A');

describe('1341A. Nastya and Rice', () => {
  it.each`
    n    | num   | a     | b     | c      | d      | result
    ${1} | ${7}  | ${20} | ${3}  | ${101} | ${18}  | ${'YES'}
    ${2} | ${11} | ${11} | ${10} | ${234} | ${2}   | ${'NO'}
    ${3} | ${8}  | ${9}  | ${7}  | ${250} | ${122} | ${'YES'}
    ${4} | ${19} | ${41} | ${21} | ${321} | ${10}  | ${'NO'}
    ${5} | ${3}  | ${10} | ${8}  | ${6}   | ${1}   | ${'YES'}
  `('Base test: $n', ({ num, a, b, c, d, result }) => {
    expect(isItCorrectWeight(num, a, b, c, d)).toBe(result);
  });
});
