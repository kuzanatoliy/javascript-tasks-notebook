const { getConfiguration } = require('./A');

describe('1443A. Kids Seating', () => {
  it.each`
    n    | num  | result
    ${1} | ${2} | ${[8, 6]}
    ${2} | ${3} | ${[12, 10, 8]}
    ${3} | ${4} | ${[16, 14, 12, 10]}
  `('Base test: $n', ({ num, result }) => {
    expect(getConfiguration(num)).toStrictEqual(result);
  });
});
