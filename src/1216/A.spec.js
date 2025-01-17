const { transformString } = require('./A');

describe('1216A. Prefixes', () => {
  it.each`
    n    | str         | result
    ${1} | ${'bbbb'}   | ${[2, 'abab']}
    ${2} | ${'ababab'} | ${[0, 'ababab']}
    ${3} | ${'aa'}     | ${[1, 'ba']}
  `('Base test: $n', ({ str, result }) => {
    expect(transformString(str)).toStrictEqual(result);
  });
});
