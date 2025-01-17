const { transformString } = require('./B');

describe('1805A. We Need the Zero', () => {
  it.each`
    n    | str        | result
    ${1} | ${'cba'}   | ${'acb'}
    ${2} | ${'acac'}  | ${'aacc'}
    ${3} | ${'abbcb'} | ${'abbcb'}
    ${4} | ${'aaba'}  | ${'aaab'}
  `('Base test: $n', ({ str, result }) => {
    expect(transformString(str)).toBe(result);
  });
});
