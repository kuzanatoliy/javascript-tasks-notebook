const { getCountOfMoves } = require('./C');

describe('1452C. Two Brackets', () => {
  it.each`
    n    | str       | result
    ${1} | ${'()'}   | ${1}
    ${2} | ${'[]()'} | ${2}
    ${3} | ${'([)]'} | ${2}
    ${4} | ${')](['} | ${0}
    ${5} | ${')[(]'} | ${1}
  `('Base test: $n', ({ str, result }) => {
    expect(getCountOfMoves(str)).toBe(result);
  });
});
