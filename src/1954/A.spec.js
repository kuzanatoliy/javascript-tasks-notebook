const { isItPossibleToPaint } = require('./A');

describe('1954A. Painting the Ribbon', () => {
  it.each`
    n    | num  | m    | k    | result
    ${1} | ${1} | ${1} | ${1} | ${'NO'}
    ${2} | ${5} | ${1} | ${1} | ${'NO'}
    ${3} | ${5} | ${2} | ${1} | ${'YES'}
    ${4} | ${5} | ${2} | ${2} | ${'NO'}
    ${5} | ${5} | ${5} | ${3} | ${'YES'}
  `('Base test: $n', ({ num, m, k, result }) => {
    expect(isItPossibleToPaint(num, m, k)).toStrictEqual(result);
  });
});
