const { getCountOfDistinctPhotobooks } = require('./A');

describe('554A. Kyoya and Photobooks', () => {
  it.each`
    n    | str     | result
    ${1} | ${'a'}  | ${51}
    ${2} | ${'hi'} | ${76}
  `('Base test: $n', ({ str, result }) => {
    expect(getCountOfDistinctPhotobooks(str)).toBe(result);
  });
});
