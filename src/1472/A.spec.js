const { isItPossibleToCutSheet } = require('./A');

describe('1472A. Cards for Friends', () => {
  it.each`
    n    | params         | result
    ${1} | ${[2, 2, 3]}   | ${'YES'}
    ${2} | ${[3, 3, 2]}   | ${'NO'}
    ${3} | ${[5, 10, 2]}  | ${'YES'}
    ${4} | ${[11, 13, 1]} | ${'YES'}
    ${5} | ${[1, 4, 4]}   | ${'YES'}
  `('Base test: $n', ({ params, result }) => {
    expect(isItPossibleToCutSheet(params)).toBe(result);
  });
});
