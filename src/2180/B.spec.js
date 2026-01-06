const { transformStrings } = require('./B');

describe('2180B. Ashmal', () => {
  it.each`
    n    | strs                                | result
    ${1} | ${['amir', 'rima', 'amin', 'nima']} | ${'aminamirrimanima'}
    ${2} | ${['codeforces']}                   | ${'codeforces'}
    ${3} | ${['a', 'ab', 'abc']}               | ${'aababc'}
    ${4} | ${['ba', 'b']}                      | ${'bab'}
  `('Base test: $n', ({ strs, result }) => {
    expect(transformStrings(strs)).toBe(result);
  });
});
