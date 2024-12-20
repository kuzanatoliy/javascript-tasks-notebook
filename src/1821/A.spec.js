const { getCountOfMatch } = require('./A');

describe('1821A. Matching', () => {
  it.each`
    n    | map        | result
    ${1} | ${'??'}    | ${90}
    ${2} | ${'?'}     | ${9}
    ${3} | ${'0'}     | ${0}
    ${4} | ${'9'}     | ${1}
    ${5} | ${'03'}    | ${0}
    ${6} | ${'1??7'}  | ${100}
    ${7} | ${'?5?'}   | ${90}
    ${8} | ${'9??99'} | ${100}
  `('Base test: $n', ({ map, result }) => {
    expect(getCountOfMatch(map)).toBe(result);
  });
});
