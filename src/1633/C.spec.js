const { isItPossibleToWin } = require('./C');

describe('1633C. Kill the Monster', () => {
  it.each`
    n    | hc     | dc   | hm    | dm    | k    | d    | h     | result
    ${1} | ${25}  | ${4} | ${9}  | ${20} | ${1} | ${1} | ${10} | ${'YES'}
    ${2} | ${25}  | ${4} | ${12} | ${20} | ${1} | ${1} | ${10} | ${'NO'}
    ${3} | ${100} | ${1} | ${45} | ${2}  | ${0} | ${4} | ${10} | ${'YES'}
    ${4} | ${9}   | ${2} | ${69} | ${2}  | ${4} | ${2} | ${7}  | ${'YES'}
  `('Base test: $n', ({ hc, dc, hm, dm, k, d, h, result }) => {
    expect(isItPossibleToWin(hc, dc, hm, dm, k, d, h)).toBe(result);
  });
});
