const { isItPossibleToGroup } = require('./A');

describe('1230A. Dawid and Bags of Candies', () => {
  it.each`
    n    | array            | result
    ${1} | ${[1, 7, 11, 5]} | ${'YES'}
    ${2} | ${[7, 3, 2, 5]}  | ${'NO'}
  `('Base test: $n', ({ array, result }) => {
    expect(isItPossibleToGroup(array)).toBe(result);
  });
});
