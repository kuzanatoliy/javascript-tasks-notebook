const { isItPossibleToColor } = require('./A');

describe('1850A. To My Critics', () => {
  it.each`
    n    | array                       | result
    ${1} | ${[1, 2, 4, 3, 2, 3, 5, 4]} | ${'YES'}
    ${2} | ${[4, 7]}                   | ${'NO'}
    ${3} | ${[3, 9, 8]}                | ${'YES'}
    ${4} | ${[1, 7]}                   | ${'YES'}
    ${5} | ${[5, 4, 3, 2, 1]}          | ${'NO'}
    ${6} | ${[4, 3, 4, 5]}             | ${'YES'}
    ${7} | ${[50, 48]}                 | ${'YES'}
  `('Base test: $n', ({ array, result }) => {
    expect(isItPossibleToColor(array)).toBe(result);
  });
});
