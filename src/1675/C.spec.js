const { getSuspectsCount } = require('./C');

describe('1675C. Detective Task', () => {
  it.each`
    n    | map           | result
    ${1} | ${'0'}        | ${1}
    ${2} | ${'1'}        | ${1}
    ${3} | ${'1110000'}  | ${2}
    ${4} | ${'?????'}    | ${5}
    ${5} | ${'1?1??0?0'} | ${4}
    ${6} | ${'0?0???'}   | ${1}
    ${7} | ${'??11'}     | ${1}
    ${8} | ${'??0??'}    | ${3}
  `('Base test: $n', ({ map, result }) => {
    expect(getSuspectsCount(map)).toBe(result);
  });
});
