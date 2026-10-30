const { isItPossibleToSplit } = require('./A');

describe("433A. Kitahara Haruki's Gift", () => {
  it.each`
    n    | arr                     | result
    ${1} | ${[100, 200, 100]}      | ${'YES'}
    ${2} | ${[100, 100, 100, 200]} | ${'NO'}
  `('Base test: $n', ({ arr, count, result }) => {
    expect(isItPossibleToSplit(arr, count)).toBe(result);
  });
});
