const { buildStr } = require('./A');

describe('1265A. Beautiful String', () => {
  it.each`
    n    | str         | result
    ${1} | ${'a???cb'} | ${'ababcb'}
    ${2} | ${'a??bbc'} | ${-1}
    ${3} | ${'a?b?c'}  | ${'acbac'}
  `('Base test: $n', ({ str, result }) => {
    expect(buildStr(str)).toStrictEqual(result);
  });
});
