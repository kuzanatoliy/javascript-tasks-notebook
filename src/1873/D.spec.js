const { getCountOfOperations } = require('./D');

describe('1873D. 1D Eraser', () => {
  it.each`
    n    | length | string          | result
    ${1} | ${3}   | ${'WBWWWB'}     | ${2}
    ${2} | ${3}   | ${'WWBWBWW'}    | ${1}
    ${3} | ${4}   | ${'BWBWB'}      | ${2}
    ${4} | ${5}   | ${'BBBBB'}      | ${1}
    ${5} | ${2}   | ${'BWBWBBBB'}   | ${4}
    ${6} | ${2}   | ${'WBBWBBWBBW'} | ${3}
    ${7} | ${1}   | ${'BBBB'}       | ${4}
    ${8} | ${2}   | ${'WWW'}        | ${0}
  `('Base test: $n', ({ length, string, result }) => {
    expect(getCountOfOperations(length, string)).toBe(result);
  });
});
