const { isItPossibleToBuild } = require('./B');

describe('1266B. Dice Towere', () => {
  it.each`
    n    | num   | result
    ${1} | ${29} | ${'YES'}
    ${2} | ${34} | ${'YES'}
    ${3} | ${19} | ${'YES'}
    ${4} | ${38} | ${'NO'}
  `('Base test: $n', ({ num, result }) => {
    expect(isItPossibleToBuild(num)).toBe(result);
  });
});
