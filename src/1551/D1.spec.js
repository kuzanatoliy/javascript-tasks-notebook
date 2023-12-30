const { itItPossibleToPlaceDominoes } = require('./D1');

describe('1551D1. Domino (easy version)', () => {
  it.each`
    n    | numbers        | result
    ${1} | ${[4, 4, 2]}   | ${'YES'}
    ${2} | ${[2, 3, 0]}   | ${'YES'}
    ${3} | ${[3, 2, 3]}   | ${'YES'}
    ${4} | ${[1, 2, 0]}   | ${'NO'}
    ${5} | ${[2, 4, 2]}   | ${'YES'}
    ${6} | ${[5, 2, 2]}   | ${'NO'}
    ${7} | ${[2, 17, 16]} | ${'YES'}
    ${8} | ${[2, 1, 1]}   | ${'NO'}
  `('Base test: $n', ({ numbers, result }) => {
    expect(itItPossibleToPlaceDominoes(numbers)).toBe(result);
  });
});
