const { isItPossibleToWin } = require('./A');

describe('2112A. Race', () => {
  it.each`
    n    | a    | x    | y    | result
    ${1} | ${1} | ${3} | ${4} | ${'YES'}
    ${2} | ${5} | ${3} | ${1} | ${'YES'}
    ${3} | ${3} | ${1} | ${5} | ${'NO'}
    ${4} | ${1} | ${2} | ${4} | ${'YES'}
  `('Base test: $n', ({ a, x, y, result }) => {
    expect(isItPossibleToWin(a, x, y)).toBe(result);
  });
});
