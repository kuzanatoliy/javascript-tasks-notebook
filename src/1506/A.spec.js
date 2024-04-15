const { getCellNumber } = require('./A');

describe('1506A. Strange Table', () => {
  it.each`
    n    | n          | m          | x                | result
    ${1} | ${1}       | ${1}       | ${1}             | ${1}
    ${2} | ${2}       | ${2}       | ${3}             | ${2}
    ${3} | ${3}       | ${5}       | ${11}            | ${9}
    ${4} | ${100}     | ${100}     | ${7312}          | ${1174}
    ${5} | ${1000000} | ${1000000} | ${1000000000000} | ${1000000000000}
  `('Base test: $n', ({ n, m, x, result }) => {
    expect(getCellNumber(n, m, x)).toBe(result);
  });
});
