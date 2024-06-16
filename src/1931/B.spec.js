const { isItPossibleToDoTheSame } = require('./B');

describe('1931B. Make Equal', () => {
  it.each`
    n    | array                    | result
    ${1} | ${[43]}                  | ${'YES'}
    ${2} | ${[1, 3]}                | ${'NO'}
    ${3} | ${[4, 5, 2, 1, 3]}       | ${'YES'}
    ${4} | ${[1, 2, 3]}             | ${'NO'}
    ${5} | ${[4, 5, 5, 0, 6, 4, 4]} | ${'NO'}
    ${6} | ${[6, 5, 5, 1, 3, 4, 4]} | ${'YES'}
  `('Base test: $n', ({ array, result }) => {
    expect(isItPossibleToDoTheSame(array)).toBe(result);
  });
});
