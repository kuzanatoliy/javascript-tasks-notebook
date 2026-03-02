const { isItPossibleToTransform } = require('./A');

describe('2175C. Replace and Sum', () => {
  it.each`
    n    | s     | x    | arr             | result
    ${1} | ${3}  | ${5} | ${[1, 1, 1]}    | ${'YES'}
    ${2} | ${8}  | ${2} | ${[1, 2, 3]}    | ${'YES'}
    ${3} | ${7}  | ${2} | ${[1, 1, 1, 1]} | ${'NO'}
    ${4} | ${15} | ${1} | ${[2, 4, 10]}   | ${'NO'}
    ${5} | ${3}  | ${5} | ${[1, 1, 1]}    | ${'YES'}
    ${6} | ${8}  | ${2} | ${[1, 2, 3]}    | ${'YES'}
  `('Base test: $n', ({ s, x, arr, result }) => {
    expect(isItPossibleToTransform(s, x, arr)).toBe(result);
  });
});
