const { isItPossibleToWin } = require('./A');

describe('1463A. Dungeon', () => {
  it.each`
    n    | a     | b    | c    | result
    ${1} | ${3}  | ${2} | ${4} | ${'NO'}
    ${2} | ${1}  | ${1} | ${1} | ${'NO'}
    ${3} | ${10} | ${1} | ${7} | ${'NO'}
  `('Base test: $n', ({ array, result }) => {
    expect(isItPossibleToWin(array)).toBe(result);
  });
});
