const { getCountOfTurns } = require('./C');

describe('1108C. Nice Garland', () => {
  it.each`
    n    | map          | result
    ${1} | ${'BRB'}     | ${[1, 'GRB']}
    ${2} | ${'RGBGRBB'} | ${[3, 'RGBRGBR']}
  `('Base test: $n', ({ map, result }) => {
    expect(getCountOfTurns(map)).toStrictEqual(result);
  });
});
