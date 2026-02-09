const { isBeautyArray } = require('./B');

describe("1975B. 378QAQ and Mocha's Array", () => {
  it.each`
    n    | arr                          | result
    ${1} | ${[7, 3, 8]}                 | ${'NO'}
    ${2} | ${[7, 1, 9, 3, 5]}           | ${'YES'}
    ${3} | ${[4, 12, 2, 6, 3]}          | ${'YES'}
    ${4} | ${[7, 49, 9, 3, 1000000000]} | ${'NO'}
  `('Base test: $n', ({ arr, result }) => {
    expect(isBeautyArray(arr)).toBe(result);
  });
});
