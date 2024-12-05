const { getMovementMap } = require('./D');

describe('1974D. Ingenuity-2', () => {
  it.each`
    n     | map         | result
    ${1}  | ${'NENSNE'} | ${'RRHHHH'}
    ${2}  | ${'WWW'}    | ${'NO'}
    ${3}  | ${'NESSWS'} | ${'HHRHHH'}
    ${4}  | ${'SN'}     | ${'NO'}
    ${5}  | ${'WE'}     | ${'NO'}
    ${6}  | ${'SSNN'}   | ${'HRHR'}
    ${7}  | ${'WESN'}   | ${'RRHH'}
    ${8}  | ${'SS'}     | ${'RH'}
    ${9}  | ${'EWNN'}   | ${'HHRH'}
    ${10} | ${'WEWE'}   | ${'RRHH'}
  `('Base test: $n', ({ map, result }) => {
    expect(getMovementMap(map)).toBe(result);
  });
});
