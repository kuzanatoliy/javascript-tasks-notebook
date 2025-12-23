const { getLEastCommonMultiple } = require('./M');

describe('1765M. Minimum LCM', () => {
  it.each`
    n    | num   | result
    ${1} | ${2}  | ${[1, 1]}
    ${2} | ${9}  | ${[3, 6]}
    ${3} | ${5}  | ${[1, 4]}
    ${4} | ${10} | ${[5, 5]}
  `('Base test: $n', ({ num, result }) => {
    expect(getLEastCommonMultiple(num)).toStrictEqual(result);
  });
});
