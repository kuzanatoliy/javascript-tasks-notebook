const { isItPossibleToTransform } = require('./A');

describe('282A. IQ Test', () => {
  it.each`
    n    | operations                                                                                  | result
    ${1} | ${[['#', '#', '#', '#'], ['.', '#', '.', '.'], ['#', '#', '#', '#'], ['.', '.', '.', '.']]} | ${'YES'}
    ${2} | ${[['#', '#', '#', '#'], ['.', '.', '.', '.'], ['#', '#', '#', '#'], ['.', '.', '.', '.']]} | ${'NO'}
  `('Base test: $n', ({ operations, result }) => {
    expect(isItPossibleToTransform(operations)).toBe(result);
  });
});
