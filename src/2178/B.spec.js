const { getCountOfOperations } = require('./B');

describe('2178B. Impost or Sus', () => {
  it.each`
    n    | str              | result
    ${1} | ${'sus'}         | ${0}
    ${2} | ${'uuuu'}        | ${3}
    ${3} | ${'sssss'}       | ${0}
    ${4} | ${'uusuuu'}      | ${3}
    ${5} | ${'suuuuuu'}     | ${3}
    ${6} | ${'usssssss'}    | ${1}
    ${7} | ${'sssuuusss'}   | ${1}
    ${8} | ${'susuusuuus'}  | ${2}
    ${9} | ${'uuuuuuuuuuu'} | ${6}
  `('Base test: $n', ({ str, result }) => {
    expect(getCountOfOperations(str)).toBe(result);
  });
});
