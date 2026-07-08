const { isItPossibleToWin } = require('./A');

describe('2199A. Game', () => {
  it.each`
    n    | k     | a1   | b1   | a2    | b2   | result
    ${1} | ${6}  | ${2} | ${3} | ${1}  | ${4} | ${'YES'}
    ${2} | ${5}  | ${3} | ${1} | ${3}  | ${1} | ${'YES'}
    ${3} | ${3}  | ${3} | ${1} | ${3}  | ${1} | ${'NO'}
    ${4} | ${10} | ${0} | ${1} | ${10} | ${0} | ${'YES'}
    ${5} | ${4}  | ${3} | ${1} | ${3}  | ${1} | ${'NO'}
  `('Base test: $n', ({ k, a1, b1, a2, b2, result }) => {
    expect(isItPossibleToWin(k, a1, b1, a2, b2)).toBe(result);
  });
});
