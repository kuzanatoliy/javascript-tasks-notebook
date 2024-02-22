const { getCountOfLighters } = require('./A');

describe('1358A. Park Lighting', () => {
  it.each`
    n    | a    | b    | result
    ${1} | ${1} | ${1} | ${1}
    ${2} | ${1} | ${3} | ${2}
    ${3} | ${2} | ${2} | ${2}
    ${4} | ${3} | ${3} | ${5}
    ${5} | ${5} | ${3} | ${8}
  `('Base test: $n', ({ a, b, result }) => {
    expect(getCountOfLighters(a, b)).toBe(result);
  });
});
