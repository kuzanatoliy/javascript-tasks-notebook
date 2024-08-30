const { isItPossibleToAddPoint } = require('./A');

describe('2004A. Make All Equal', () => {
  it.each`
    n    | array                  | result
    ${1} | ${[3, 8]}              | ${'YES'}
    ${2} | ${[5, 6]}              | ${'NO'}
    ${3} | ${[1, 2, 3, 4, 5, 10]} | ${'NO'}
  `('Base test: $n', ({ array, result }) => {
    expect(isItPossibleToAddPoint(array)).toBe(result);
  });
});
