const { getCountOfConfigurations } = require('./A');

describe('2171A. Shizuku Hoshikawa and Farm Legs', () => {
  it.each`
    n    | num    | result
    ${1} | ${2}   | ${1}
    ${2} | ${3}   | ${0}
    ${3} | ${4}   | ${2}
    ${4} | ${6}   | ${2}
    ${5} | ${100} | ${26}
  `('Base test: $n', ({ num, result }) => {
    expect(getCountOfConfigurations(num)).toBe(result);
  });
});
