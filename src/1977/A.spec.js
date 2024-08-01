const { isItPossibleToObtainTower } = require('./A');

describe('1977A. Little Nikita', () => {
  it.each`
    n    | nn   | mm   | result
    ${1} | ${3} | ${3} | ${'YES'}
    ${2} | ${2} | ${4} | ${'NO'}
    ${3} | ${5} | ${3} | ${'YES'}
  `('Base test: $n', ({ nn, mm, result }) => {
    expect(isItPossibleToObtainTower(nn, mm)).toBe(result);
  });
});
