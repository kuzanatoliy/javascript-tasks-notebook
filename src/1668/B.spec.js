const { isItPossibleToSit } = require('./B');

describe('1668B. Social Distance', () => {
  it.each`
    n    | arr             | limit | result
    ${1} | ${[1, 1, 1]}    | ${2}  | ${'NO'}
    ${2} | ${[1, 1]}       | ${4}  | ${'YES'}
    ${3} | ${[2, 1]}       | ${5}  | ${'NO'}
    ${4} | ${[1, 2, 1]}    | ${8}  | ${'YES'}
    ${5} | ${[1, 2, 1, 3]} | ${12} | ${'NO'}
    ${6} | ${[1, 2, 1, 3]} | ${19} | ${'YES'}
  `('Base test: $n', ({ arr, limit, result }) => {
    expect(isItPossibleToSit(arr, limit)).toBe(result);
  });
});
