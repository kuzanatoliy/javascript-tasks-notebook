const { isArrayExisted } = require('./A');

describe('2069A. Was there an Array?', () => {
  it.each`
    n    | arr                         | result
    ${1} | ${[0, 1, 0, 0, 0, 0, 1, 1]} | ${'YES'}
    ${2} | ${[1]}                      | ${'YES'}
    ${3} | ${[0, 1, 0, 1, 1, 0, 0, 1]} | ${'NO'}
    ${4} | ${[0, 1, 0, 0, 0, 1, 0, 1]} | ${'NO'}
  `('Base test: $n', ({ arr, result }) => {
    expect(isArrayExisted(arr)).toBe(result);
  });
});
