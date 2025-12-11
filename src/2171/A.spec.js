const { getCountOfConfigurations } = require('./A');

describe('2171A. Shizuku Hoshikawa and Farm Legs', () => {
  it.each`
    n    | num    | result
    ${1} | ${2}   | ${1}
    ${2} | ${3}   | ${0}
    ${3} | ${4}   | ${2}
    ${5} | ${6}   | ${2}
    ${6} | ${100} | ${26}
  `('Base test: $n', ({ num, result }) => {
    expect(getCountOfConfigurations(num)).toBe(result);
  });
});
