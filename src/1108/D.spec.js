const { getCountOfTurns } = require('./D');

describe('1108D. Diverse Garland', () => {
  it.each`
    n    | map                | result
    ${1} | ${'RBGRRBRGG'}     | ${[2, 'RBGRGBRGB']}
    ${2} | ${'BBBGBRRR'}      | ${[2, 'BRBGBRGR']}
    ${3} | ${'BBRRRRGGGGGRR'} | ${[6, 'BGRGRBGBGBGRG']}
  `('Base test: $n', ({ map, result }) => {
    expect(getCountOfTurns(map)).toStrictEqual(result);
  });
});
