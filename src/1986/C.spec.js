const { getLexicographicallySmallestString } = require('./C');

describe('1986C. Update Queries', () => {
  it.each`
    n    | str          | array                             | mutation        | result
    ${1} | ${'a'}       | ${[1, 1]}                         | ${'cb'}         | ${'b'}
    ${2} | ${'meow'}    | ${[1, 2, 1, 4]}                   | ${'zcwz'}       | ${'cwoz'}
    ${3} | ${'abacaba'} | ${[1, 3, 5, 7]}                   | ${'damn'}       | ${'abdcmbn'}
    ${4} | ${'traktor'} | ${[7, 6, 5, 4, 3, 2, 1, 6, 4, 2]} | ${'codeforces'} | ${'ccdeefo'}
  `('Base test: $n', ({ str, array, mutation, result }) => {
    expect(getLexicographicallySmallestString(str, array, mutation)).toBe(
      result
    );
  });
});
