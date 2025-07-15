const { isItPossibleToGetSquare } = require('./A');

describe('2120A. Square of Rectangles', () => {
  it.each`
    n    | l1     | b1     | l2    | b2    | l3   | b3   | result
    ${1} | ${100} | ${100} | ${10} | ${10} | ${1} | ${1} | ${'NO'}
    ${2} | ${5}   | ${3}   | ${5}  | ${1}  | ${5} | ${1} | ${'YES'}
    ${3} | ${2}   | ${3}   | ${1}  | ${2}  | ${1} | ${1} | ${'YES'}
    ${4} | ${8}   | ${5}   | ${3}  | ${5}  | ${3} | ${3} | ${'NO'}
    ${5} | ${3}   | ${3}   | ${3}  | ${3}  | ${2} | ${1} | ${'NO'}
  `('Base test: $n', ({ l1, b1, l2, b2, l3, b3, result }) => {
    expect(isItPossibleToGetSquare(l1, b1, l2, b2, l3, b3)).toBe(result);
  });
});
