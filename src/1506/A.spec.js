const { getCellNumber } = require('./A');

describe('1506A. Strange Table', () => {
  it.each`
    n    | nn         | m          | x                | result
    ${1} | ${1}       | ${1}       | ${1}             | ${1}
    ${2} | ${2}       | ${2}       | ${3}             | ${2}
    ${3} | ${3}       | ${5}       | ${11}            | ${9}
    ${4} | ${100}     | ${100}     | ${7312}          | ${1174}
    ${5} | ${1000000} | ${1000000} | ${1000000000000} | ${1000000000000}
  `('Base test: $n', ({ nn, m, x, result }) => {
    expect(getCellNumber(nn, m, x)).toBe(result);
  });
});
