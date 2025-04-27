const { getCleaningTimes } = require('./A');

describe('709A. Juicer', () => {
  it.each`
    n    | b     | d     | arr          | result
    ${1} | ${7}  | ${10} | ${[5, 6]}    | ${1}
    ${2} | ${5}  | ${10} | ${[7]}       | ${0}
    ${3} | ${10} | ${10} | ${[5, 7, 7]} | ${1}
    ${4} | ${1}  | ${1}  | ${[1]}       | ${0}
  `('Base test: $n', ({ b, d, arr, result }) => {
    expect(getCleaningTimes(b, d, arr)).toBe(result);
  });
});
