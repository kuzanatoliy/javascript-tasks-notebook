const { getSubstrings } = require('./A2');

describe('1775A2. Gardener and the Capybaras (hard version)', () => {
  it.each`
    n    | str       | result
    ${1} | ${'bbba'} | ${['b', 'b', 'ba']}
    ${2} | ${'aba'}  | ${['a', 'b', 'a']}
    ${3} | ${'aaa'}  | ${['a', 'a', 'a']}
    ${4} | ${'abba'} | ${['a', 'bb', 'a']}
    ${5} | ${'abbb'} | ${['a', 'bb', 'b']}
  `('Base test: $n', ({ str, result }) => {
    expect(getSubstrings(str)).toStrictEqual(result);
  });
});
