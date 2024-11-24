const { isItPossibleToPlace } = require('./A');

describe('1499A. Domino on Windowsill', () => {
  it.each`
    n    | num  | k1   | k2   | w    | b    | result
    ${1} | ${1} | ${0} | ${1} | ${1} | ${0} | ${'NO'}
    ${2} | ${1} | ${1} | ${1} | ${0} | ${0} | ${'YES'}
    ${3} | ${3} | ${0} | ${0} | ${1} | ${3} | ${'NO'}
    ${4} | ${4} | ${3} | ${1} | ${2} | ${2} | ${'YES'}
    ${5} | ${5} | ${4} | ${3} | ${3} | ${1} | ${'YES'}
  `('Base test: $n', ({ num, k1, k2, w, b, result }) => {
    expect(isItPossibleToPlace(num, k1, k2, w, b)).toBe(result);
  });
});
