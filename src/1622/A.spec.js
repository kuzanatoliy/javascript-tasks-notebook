const { isItPossibleToCreateFigure } = require('./A');

describe('1622A. Construct a Rectangle', () => {
  it.each`
    n    | array        | result
    ${1} | ${[6, 1, 5]} | ${'YES'}
    ${2} | ${[2, 5, 2]} | ${'NO'}
    ${3} | ${[2, 4, 2]} | ${'YES'}
    ${4} | ${[5, 5, 4]} | ${'YES'}
  `('Base test: $n', ({ array, result }) => {
    expect(isItPossibleToCreateFigure(array)).toBe(result);
  });
});
