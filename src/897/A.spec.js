const { transformString } = require('./A');

describe('897A. Scarborough Fair', () => {
  it.each`
    n    | str        | queries                                                   | result
    ${1} | ${'ioi'}   | ${[[1, 1, 'i', 'n']]}                                     | ${'noi'}
    ${2} | ${'wxhak'} | ${[[3, 3, 'h', 'x'], [1, 5, 'x', 'a'], [1, 3, 'w', 'g']]} | ${'gaaak'}
  `('Base test: $n', ({ str, queries, result }) => {
    expect(transformString(str, queries)).toBe(result);
  });
});
