const { isItPossibleToReport } = require('./A');

describe('1836A. Destroyer', () => {
  it.each`
    n    | items                          | result
    ${1} | ${[0, 1, 2, 0, 1, 0]}          | ${'YES'}
    ${2} | ${[0, 0, 0, 0, 1, 1, 1, 2, 2]} | ${'YES'}
    ${3} | ${[0, 0, 2]}                   | ${'NO'}
    ${4} | ${[99]}                        | ${'NO'}
    ${5} | ${[0, 1, 2, 3, 4]}             | ${'YES'}
  `('Base test: $n', ({ items, result }) => {
    expect(isItPossibleToReport(items)).toBe(result);
  });
});
