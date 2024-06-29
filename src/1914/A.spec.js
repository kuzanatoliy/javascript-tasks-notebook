const { getCountOfSovedTasks } = require('./A');

describe('1914A. Problemsolving Log', () => {
  it.each`
    n    | string                      | result
    ${1} | ${'ACBCBC'}                 | ${3}
    ${2} | ${'AAAAFPC'}                | ${1}
    ${3} | ${'FEADBBDFFEDFFFDHHHADCC'} | ${4}
  `('Base test: $n', ({ string, result }) => {
    expect(getCountOfSovedTasks(string)).toBe(result);
  });
});
