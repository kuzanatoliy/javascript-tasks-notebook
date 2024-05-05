const { getCountOfOperations } = require('./D');

describe('1873D. 1D Eraser', () => {
  it.each`
    n    | length | string          | result
    ${1} | ${3}   | ${'WBWWWB'}     | ${2}
    ${1} | ${3}   | ${'WWBWBWW'}    | ${1}
    ${1} | ${4}   | ${'BWBWB'}      | ${2}
    ${1} | ${5}   | ${'BBBBB'}      | ${1}
    ${1} | ${2}   | ${'BWBWBBBB'}   | ${4}
    ${1} | ${2}   | ${'WBBWBBWBBW'} | ${3}
    ${1} | ${1}   | ${'BBBB'}       | ${4}
    ${1} | ${2}   | ${'WWW'}        | ${0}
  `('Base test: $n', ({ length, string, result }) => {
    expect(getCountOfOperations(length, string)).toBe(result);
  });
});
