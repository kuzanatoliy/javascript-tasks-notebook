const { getCountOfRoundedNumber } = require('./A');

describe('1766A. Extremely Round', () => {
  it.each`
    n    | number | result
    ${1} | ${9}   | ${9}
    ${2} | ${42}  | ${13}
    ${3} | ${13}  | ${10}
    ${4} | ${100} | ${19}
    ${5} | ${111} | ${19}
  `('Base test: $n', ({ number, result }) => {
    expect(getCountOfRoundedNumber(number)).toBe(result);
  });
});
