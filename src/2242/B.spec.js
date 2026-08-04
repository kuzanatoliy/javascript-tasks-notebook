const { isItPossibleToSplit } = require('./B');

describe('2242B. Predominant Frequency Division', () => {
  it.each`
    n     | arr                         | result
    ${1}  | ${[2, 1, 1, 3, 3, 1, 2, 3]} | ${'YES'}
    ${2}  | ${[2, 1, 3, 3, 3, 2, 3]}    | ${'NO'}
    ${3}  | ${[1, 3, 3, 2]}             | ${'NO'}
    ${4}  | ${[2, 2, 2, 1, 1, 1]}       | ${'NO'}
    ${5}  | ${[3, 2, 1, 2, 1, 1, 2, 3]} | ${'YES'}
    ${6}  | ${[2, 1, 2]}                | ${'NO'}
    ${7}  | ${[1, 2, 3]}                | ${'YES'}
    ${8}  | ${[1, 3, 3, 1, 1]}          | ${'YES'}
    ${9}  | ${[1, 1, 3, 3, 1]}          | ${'YES'}
    ${10} | ${[1, 3, 1]}                | ${'NO'}
  `('Base test: $n', ({ arr, result }) => {
    expect(isItPossibleToSplit(arr)).toBe(result);
  });
});
