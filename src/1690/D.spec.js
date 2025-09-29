const { getMinCountOfRecoloredCells } = require('./D');

describe('1690B. Array Decrements', () => {
  it.each`
    n    | str        | k    | result
    ${1} | ${'BBWBW'} | ${3} | ${1}
    ${2} | ${'BBWBW'} | ${5} | ${2}
    ${3} | ${'BBWBW'} | ${1} | ${0}
    ${4} | ${'W'}     | ${1} | ${1}
  `('Base test: $n', ({ str, k, result }) => {
    expect(getMinCountOfRecoloredCells(str, k)).toBe(result);
  });
});
