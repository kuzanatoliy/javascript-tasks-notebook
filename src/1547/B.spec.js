const { isItPossibleToSortString } = require('./B');

describe('1547A. Shortest Path with Obstacle', () => {
  it.each`
    n     | string         | result
    ${1}  | ${'a'}         | ${'YES'}
    ${2}  | ${'ba'}        | ${'YES'}
    ${3}  | ${'ab'}        | ${'YES'}
    ${4}  | ${'bac'}       | ${'YES'}
    ${5}  | ${'ihfcbadeg'} | ${'YES'}
    ${6}  | ${'z'}         | ${'NO'}
    ${7}  | ${'aa'}        | ${'NO'}
    ${8}  | ${'ca'}        | ${'NO'}
    ${9}  | ${'acb'}       | ${'NO'}
    ${10} | ${'xyz'}       | ${'NO'}
    ${11} | ${'ddcba'}     | ${'NO'}
  `('Base test: $n', ({ string, result }) => {
    expect(isItPossibleToSortString(string)).toBe(result);
  });
});
