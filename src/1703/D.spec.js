const { getMap } = require('./D');

describe('1703D. Double Strings', () => {
  it.each`
    n    | strs                                                                 | result
    ${1} | ${['abab', 'ab', 'abc', 'abacb', 'c']}                               | ${'10100'}
    ${2} | ${['x', 'xx', 'xxx']}                                                | ${'011'}
    ${3} | ${['codeforc', 'es', 'codes', 'cod', 'forc', 'forces', 'e', 'code']} | ${'10100101'}
  `('Base test: $n', ({ strs, result }) => {
    expect(getMap(strs)).toBe(result);
  });
});
