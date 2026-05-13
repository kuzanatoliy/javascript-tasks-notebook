const { getCountOfCorrectCommands } = require('./B');

describe('898B. Buggy Robot', () => {
  it.each`
    n    | map         | result
    ${1} | ${'LDUR'}   | ${4}
    ${2} | ${'RRRUU'}  | ${0}
    ${3} | ${'LLRRRR'} | ${4}
  `('Base test: $n', ({ map, result }) => {
    expect(getCountOfCorrectCommands(map)).toBe(result);
  });
});
