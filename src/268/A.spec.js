const { checkCountOfGuestUniforms } = require('./A');

describe('268A. Games', () => {
  it.each`
    n    | uniforms                                     | result
    ${1} | ${[[1, 2], [2, 4], [3, 4]]}                  | ${1}
    ${2} | ${[[100, 42], [42, 100], [5, 42], [100, 5]]} | ${5}
    ${2} | ${[[1, 2], [1, 2]]}                          | ${0}
  `('Base test: $n', ({ uniforms, result }) => {
    expect(checkCountOfGuestUniforms(uniforms)).toBe(result);
  });
});
