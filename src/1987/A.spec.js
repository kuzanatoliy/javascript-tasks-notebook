const { getTime } = require('./A');

describe('1987A. Upload More RAM', () => {
  it.each`
    n    | number | k      | result
    ${1} | ${5}   | ${1}   | ${5}
    ${2} | ${2}   | ${2}   | ${3}
    ${3} | ${2}   | ${3}   | ${4}
    ${4} | ${1}   | ${7}   | ${1}
    ${5} | ${11}  | ${5}   | ${51}
    ${6} | ${100} | ${100} | ${9901}
  `('Base test: $n', ({ number, k, result }) => {
    expect(getTime(number, k)).toBe(result);
  });
});
