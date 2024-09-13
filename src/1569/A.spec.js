const { getSubStr } = require('./A');

describe('1567A. Balanced Substring', () => {
  it.each`
    n    | str            | result
    ${1} | ${'a'}         | ${[-1, -1]}
    ${2} | ${'abbaba'}    | ${[1, 2]}
    ${3} | ${'abbaba'}    | ${[1, 2]}
    ${4} | ${'babbabbaa'} | ${[1, 2]}
  `('Base test: $n', ({ str, result }) => {
    expect(getSubStr(str)).toStrictEqual(result);
  });
});
